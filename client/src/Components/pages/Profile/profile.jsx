
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { HashLoader } from 'react-spinners';
//import axios from 'axios';
import './profile.css'
function UserProfile() {
  const [userData, setUserData] = useState({});
 // const [isLoading, setIsLoading] = useState(false);


  const navigate = useNavigate();
  const handleProfile = async () => {
    try {
     
      const response = await fetch("/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setUserData(data);
      console.log(data);

  //navigate('/ExamPage'); // Navigate to ExamPage after setting user data
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleProfile();
  }, []);

  const handleExamPage = () => {
    // setIsLoading(true);

    // setTimeout(() => {
    //   navigate('/Validation');
    //   setIsLoading(false);
    // }, 3000);

    navigate('/ExamPage');
  }

  return (
<div class="proback">
<div className="container1">
  <div className="profile-box">
    <h1>User Profile</h1>
    <ul>
      <li><b>Full Name:</b> {userData.fullname}</li>
      <li><b>Aadhar Number:</b> {userData.aadharnumber}</li>
      <li><b>Phone Number:</b> {userData.phone}</li>
      <li><b>Date of Birth:</b> {userData.dob}</li>
      <li><b>Email:</b> {userData.email}</li>
      <li><b>Address:</b> {userData.address}</li>
    </ul>
    <button onClick={handleExamPage}>Start Exam</button>
    {/* <button onClick={handleProfile}>Profile Verified</button> */}
  </div>
</div>
{/* {isLoading && (
        <div className="loading-overlay">
          <HashLoader color="#5F9FE2" size={80} margin={10} />
        </div>
      )} */}

</div>

  );
}

export default UserProfile;
