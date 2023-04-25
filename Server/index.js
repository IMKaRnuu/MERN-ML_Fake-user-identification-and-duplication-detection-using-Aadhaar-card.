const dotenv = require('dotenv');
const { Router } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
//const fetch = require('node-fetch');
const aadhar = require('./models/aadharUser');
const client = require("twilio")('ACb0bd2bde89479e44753306098a58d7b3', 'e2e9396785dd81ac2df7ecfaf3c02c95');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const session = require('express-session');

dotenv.config({path:'./config.env'});
const PORT = process.env.PORT;
const DB = process.env.DATABASE;
// console.log(DB)

mongoose
.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // userUnifiedTopology: true,
  //  userFindandModify:false,
})
.then(() => {
  console.log("Connected To MongoDB");
})
.catch((err) => {
  console.log("Error occurred with MongoDB: " + err);
});

app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.get('/', (req, res) => {
  res.redirect('/form');
});




//Registration
app.post("/loginn",async(req,res)=>{
console.log(req.body)
  const { AD_number,fullname,DOB,email,phone,address, } = req.body;
  const profileImage = req.file ? req.file.path : '';
  console.log(AD_number)
  const objuser = {
    aadharnumber:AD_number,
    fullname:fullname,
    dob:DOB,
    email:email,
    phone:phone,
    address:address,
    profileImage:profileImage
  }
  console.log(objuser)
  const Insert = await aadhar.insertMany(
    objuser
  ).catch(e=>{
    console.log(e)
  })
  res.send("hello world");
})



//validating!!!!!!>_DONE
let phoneNumber;
let Userid;
let username;
app.post('/signin', async(req,res)=> {
 
const examCompleted = req.cookies.examCompleted;
  try{
    const{fullname, aadharnumber, phone,dob}=req.body;

    if(!fullname || !aadharnumber || !phone || !dob) {
      return res.status(400).json({error:"Please fill all the data"})
    }

    const userlogin = await aadhar.findOne({ fullname: fullname , phone: phone, aadharnumber: aadharnumber, dob:dob});
    console.log(userlogin);

    phoneNumber=phone
   // const user = req.session.user;
    if(!userlogin){
      res.status(400).json({error: "Invalid credentials"})
    }




   else if (userlogin.hasCompletedExam === true) {
      //return res.send('You have already completed the exam and cannot take it again');
      res.status(400).json({error: "You have already submitted the exam !!"})
    }
    else if(userlogin.inValidationProcess === true){
      res.status(400).json({error: "You are in Bettween the Validation Process.Please Contact Support!"})

    }

    else{
      // const isLogged = "True"
      res.cookie('examCompleted', userlogin, { httpOnly: true, secure: true });
 
       // req.session.user = {
       //   username: userlogin.fullname,
       //   isAdmin: true
       // };

           // Set a flag to indicate that the user has completed the exam
    userlogin.inValidationProcess = true;
    userlogin.profileImage='ijhfihvifoxbhfibuvhfhfioguhfgioudfhfjhikghfioguhjfhgvihizfuvhgdfiugvhdfkjhgvbdfjvhfbgvuhdzfbgvdkzjhbvzjfhbv';


    await userlogin.save();

    res.json({message: "Student Details match!"})
    Userid=userlogin._id
    username=userlogin.fullname;

    }
   

  }catch(err){
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });

  }
}) 

//Geting User profile
app.get('/profile', async (req, res) => {
  const kp = req.cookies.examCompleted
  console.log(kp)
  if(typeof kp !== 'undefined' && kp !== null){
  try {
    const user = await aadhar.findById(Userid); // assuming the user ID is stored in req.user.id after login
    res.json(user);
   // console.log(user)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}
else{
  res.redirect('/signin')
}
});

//logout

// In your server-side code
app.post('/submit-exam', async function(req, res) {
  // Save the flag in session or database
  // req.session.hasCompletedExam = true;
  try {
    // Find the user in the database using the stored Userid
    const user = await aadhar.findById(Userid);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Set the hasCompletedExam flag to true
    user.hasCompletedExam = true;
    await user.save();

    res.cookie('examCompleted', true);

    // Send a response indicating that the exam has been submitted
    res.send('Exam has been submitted');

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }

});


// In your server-side code
app.post('/logout', function(req, res) {

  res.clearCookie('examCompleted');
  res.sendStatus(200);
 // res.redirect('signin')
});







//Getting Phone Number
app.get("/getPhoneNumber", async (req, res) => {
  // Return the stored phone number
  res.send({ phonenumber: phoneNumber });
  });





//sending OTP

app.post("/sendcode", async (req, res) => {
  const { phonenumber } = req.body;
  const newPhoneNumber = "+91" + phonenumber;

  client.verify.v2.services
    .create({friendlyName: 'My Verify Service'})
    .then((service) => {
      console.log(service.sid);
      const opts = {
        to: newPhoneNumber,
        channel: "sms",
        // passing the service sid
        serviceSid: service.sid
      };

      client.verify.v2.services("VA28d4d74cb379ad0b5b109c89f8800cdb").verifications
        .create(opts)
        .then((verification) => {
          console.log(verification.status);
          res.status(200).send({ "status": "success", "message": "OTP Send Successfully", "id": verification.sid });
        })
        .catch((err) => {
          console.log(err);
          res.status(200).send({ "status": "failed", "message": "Unable to Send OTP" });
        })
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ status: "error", message: "An error occurred while creating verify service" });
    });
});

app.post("/verify", async (req, res) => {
  
  const { phonenumber, code } = req.body;
  const newPhoneNumber = "+91" + phonenumber;
  client.verify.v2.services("VA28d4d74cb379ad0b5b109c89f8800cdb")
    .verificationChecks
    .create({to: newPhoneNumber, code: code})
    .then((verification_check) => {
      console.log(verification_check.status);
      if (verification_check.status === "approved") {
        res.status(200).send({ status: "success", message: "OTP Verified!!" });
      } else {
        res.status(400).send({ status: "failure", message: "OTP not Verified, Please enter it again!!" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error", message: "An error occurred while verifying the OTP" });
    });
});

//getting username
app.get('/authUser', (req, res, next) => {
 // const username = "John Doe"; // replace this with the actual authenticated user's name
  res.send({ authUser: username });
});


//FACE TUSHAR>>>>>

const { PythonShell } = require('python-shell');
//const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'Server/images'), // use an absolute path
  filename: function (req, file, cb) {
    cb(null, 'image.jpg');
  }
});




app.post('/upload', upload.single('image'), (req, res) => {
  const filePath = path.join(__dirname, req.file.path);
  const targetPath = path.join(__dirname, 'images/image.jpg');
  
  // Rename the file to target path
  fs.rename(filePath, targetPath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error while uploading image.' });
    } else {
      res.status(200).send({ message: 'Image uploaded successfully.' });
    }
  });
});


//fetching pyton script
const { spawn } = require('child_process');

app.get('/faceT', (req, res, next) => {
  const image_path = "C:/Users/91976/OneDrive/Desktop/logoutPr/dnj2/Server/images/image.jpg";

  // Spawn a new child process to run the Python script
  const python = spawn('python', ['C:/Users/91976/OneDrive/Desktop/logoutPr/dnj2/Server/FaceDetect/chat.py', image_path]);

  // Collect the output from the Python script
  let result = '';
  python.stdout.on('data', (data) => {
    result += data.toString();
  });

  // Handle errors from the Python script
  python.stderr.on('data', (data) => {
   console.error(`stderr: ${data}`);
  });

  // When the Python script has finished, send the result back to the client
  python.on('close', (code) => {
    console.log(`child process exited with code: ${code}`);

    const trimmedResult = result.trim(); // remove newline character
  const responseObj = { result: trimmedResult }; // wrap the result in an object
  const jsonResponse = JSON.stringify(responseObj); // convert the object to JSON format
  res.send(jsonResponse); // send the JSON response back to the client
  console.log(jsonResponse)

  });

});

app.listen(PORT, function () {
    console.log(`listening to ${PORT}`);
});
