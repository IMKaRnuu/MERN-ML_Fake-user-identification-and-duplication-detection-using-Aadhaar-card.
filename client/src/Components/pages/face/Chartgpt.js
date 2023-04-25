//import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Chartgpt.css'
import { HashLoader } from 'react-spinners';

const App = () => {
  const webcamRef = useRef(null);
  const [result, setResult] = useState('');
  const [authUser, setAuthUser] = useState('');
  //const [isLoading, setIsLoading] = useState(false);

  const [isDetectLoading, setIsDetectLoading] = useState(false); // new state for detection loading
  const navigate = useNavigate();

  // Make a request to the '/authUser' route to get the authenticated user's name
useEffect(() => {
  async function fetchAuthUser() {
    const response = await fetch('/authUser');
    const data = await response.text();
    setAuthUser(data);
    console.log(data);
  }
  fetchAuthUser();
}, []);

  async function handleButtonClick() {
    setIsDetectLoading(true); // set detection loading to true
    const response1 = await fetch('/authUser');
    const data1 = await response1.json();



    const response2 = await fetch('/faceT');
    const data2 = await response2.json();
    setResult(data2);
    console.log(data2)
  
    // Compare the face detection result with the authenticated user's name
  if (data1.authUser === data2.result.trim()) {
    alert("User authenticated");
    navigate('/Profile');
  } else {
    alert("User not authenticated");
  }
  setIsDetectLoading(false); // set detection loading to false after getting response
}


  const capture = () => {

    const imageSrc = webcamRef.current.getScreenshot();
    
    // create a new FormData object and append the captured image as a file
    const formData = new FormData();
    formData.append('image', dataURItoBlob(imageSrc), 'image.jpg');

    console.log(formData);
    // setIsLoading(true);
    // send a POST request to the server-side endpoint to save the image
    fetch('/upload', {
      method: 'POST',
      body: formData


    })
    // setIsLoading(false)
    .then(response => response.json())
    .then(data => console.log(data),
    
    alert("Image Captured") )
    .catch(error => console.error(error));
  };

  // utility function to convert data URI to Blob object
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

 

  

  // return (
  //   <>
  //   <div>
  //     <Webcam
  //       audio={false}
  //       ref={webcamRef}
  //       screenshotFormat="image/jpeg"
  //     />
  //     <button onClick={capture}>Capture photo</button>

  //   </div>

  //    <div>
  //     <button onClick={handleButtonClick}>Run Face Detection</button>
  //     <p>Result: {result}</p>
  //    </div>
  //   </>
    
  // );
  return (
    <div className="app-container1"> 
    
    {isDetectLoading && (
        <div className="loading-overlay">
          <HashLoader color="#5F9FE2" size={80} margin={10} />
        </div>
      )}

      <div className="webcam-container1">
        <h2 className="face"><b>Face Verification</b></h2>
        
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
       
        
        <button className="capture-button" onClick={capture}>Capture photo</button>
        <button className="detection-button" onClick={handleButtonClick}>Run Face Detection</button>
        
      </div>
      
      <div className="detection-container1">
      {/* <p className="result-text">Result: {result}</p> */}
      
      </div>
     
    </div>
  );

};

export default App;
