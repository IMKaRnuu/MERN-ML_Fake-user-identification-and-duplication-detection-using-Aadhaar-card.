// import './forrm.css'
// import React, { useState } from 'react';
// //import { Navigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// //import { useHistory } from '@reach/router';
// //import { Redirect } from 'react-router-dom';
// import { useNavigate, NavLink } from "react-router-dom";
// import Button from '@mui/material/Button';


// const SignInForm = (props) => {
//   const [fullname, setFullName] = useState('');
//   const [aadharnumber, setAadharNumber] = useState('');
//   const [phone, setPhone] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const navigate = useNavigate();

//   //const history = useHistory();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!fullname || !aadharnumber || !phone) {
//       setError('Please fill in all the fields.');
//       return;
//     }

//     if (aadharnumber.length !== 12) {
//       setError('Aadhar number should be 12 digits long.');
//       return;
//     }

//     if (phone.length !== 10) {
//       setError('Phone number should be 10 digits long.');
//       return;
//     }

//     try {
//       const response = await fetch('/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ fullname, aadharnumber, phone })
//       });
//       const data = await response.json();
//       if (data.error) {
//         setError(data.error);
//         setSuccess('');
//       } else {
//         setSuccess(data.message);
//         setError('');
//        {props.userDetail}
//   //       const { auth } = props.data;
//   // console.log(auth);
//         navigate("/otp");
//         window.location.reload();
//        // history.push('/next-page');
       
//       }
//     } catch (err) {
//       setError('An error occurred');
//       setSuccess('');
//     }
//   };


//   return (
//     <div className="sign-in-form">
//     <form onSubmit={handleSubmit}>
//       <h2>Validation Form </h2>
//       <label>
//         Full Name
//         <input type="text" value={fullname} onChange={(e) => setFullName(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Aadhar Number
//         <input type="text" value={aadharnumber} onChange={(e) => setAadharNumber(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Phone
//         <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
//       </label>
//       <br />
//       <Button type="submit" variant="contained" >Verify Me</Button>
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//       {success && <div style={{ color: 'green' }}>{success}</div>}
//     </form>
//     </div>
30
//   );
// };



// export default SignInForm;



//Working

import './forrm.css'
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { HashLoader } from 'react-spinners';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';


const SignInForm = (props) => {
  const [fullname, setFullName] = useState('');
  const [aadharnumber, setAadharNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!fullname || !aadharnumber || !phone || !dob || !email) {
      setError('Please fill in all the fields.');
      return;
    }

    if (aadharnumber.length !== 12) {
      setError('Aadhar number should be 12 digits long.');
      return;
    }

    if (phone.length !== 10) {
      setError('Phone number should be 10 digits long.');
      return;
    }
    

    try {
      setIsLoading(true);
      const response = await fetch('/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullname, aadharnumber, phone, dob, email })
      });
      const data = await response.json();
      if (data.error) {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        setError(data.error);
        setSuccess('');
        
      } else {
        setSuccess(data.message);
        setError('');
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        navigate("/otp");
        alert("User Verified");
       // window.location.reload();   
      }
    } catch (err) {
      console.log(err);
      setError('An error occurred');
      setSuccess('');
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };


  //new

  const handleFullNameChange = (e) => {
    // Accept only capital letters
    const regex = /^[a-z\s]*$/;
    const input = e.target.value;
    if (regex.test(input)) {
      setFullName(input);
    }
  };

  const handleAadharNumberChange = (e) => {
    // Accept only 12 digits
    const regex = /^[0-9]{0,12}$/;
    const input = e.target.value;
    if (regex.test(input)) {
      setAadharNumber(input);
    }
  };

  const handlePhoneChange = (e) => {
    // Accept only 10 digits
    const regex = /^[0-9]{0,10}$/;
    const input = e.target.value;
    if (regex.test(input)) {
      setPhone(input);
    }
  };

  return (
    <div className="sign-in-form">

{/* {isLoading ? (
        <div className=".loading-overlay1">
          <HashLoader color="#5F9FE2" size={80} margin={10} />
        </div>
      ) : ( */}

{isLoading && (
        <div className="loading-overlay">
          <HashLoader color="#5F9FE2" size={80} margin={10} />
        </div>
      )}



      <form onSubmit={handleSubmit}>
        <h2><b>Validation Form</b></h2>
        <label>
          Full Name *
          <input type="text" value={fullname} onChange={handleFullNameChange} placeholder="Small Letters Only" />
        </label>
        <br />
        <label>
          Aadhar Number *
          <input type="text" value={aadharnumber} onChange={handleAadharNumberChange} placeholder="12 Digit UID"/>
        </label>
        <br />
        <label>
          Phone *
          <input type="text" value={phone} onChange={handlePhoneChange} placeholder="10 Digit Mobile Number" />
        </label>
        <br />


        <label>
          Date of Birth *
          <input type="date" value={dob} onChange={(e) => setDOB(e.target.value)} />
        </label>
        <br />
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="xyz@gmail.com" />
        </label>
        <br />
        <Button type="submit" variant="contained">Verify Me</Button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green' }}>{success}</div>}
      </form>
      {/* )} */}
    </div>
  );
};

export default SignInForm;
