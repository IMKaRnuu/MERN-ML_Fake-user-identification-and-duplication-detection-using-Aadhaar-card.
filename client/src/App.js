import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
//import Form from './Components/Form/Form';
//import Signup from "./Components/Signup/Signup";
import { useCookies } from 'react-cookie';
import Form from "./Components/Form/Form";
import ExampleForm from "./Components/pages/Form/ExampleForm";
import OTPverification from "./Components/pages/otpp/OTPverification";
import React,{useEffect, useState } from 'react'
import Chartgt from "./Components/pages/face/Chatgt"
import Profile from "./Components/pages/Profile/profile";
import Chartgpt from "./Components/pages/face/Chartgpt";
import Front from "./Components/pages/front/front"
import Logout from "./Components/pages/logout/logout"

function App(props) {

    return ( 
    
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
      <Route path="/" element={<Front/>} />
        <Route path="/Validation" element={< ExampleForm/>} />   
        <Route exact path="/otp" element={<OTPverification /> } /> 
        <Route path="/face" element={< Chartgpt/>} /> 
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/register" element={<Form/>} />
        <Route path="/ExamPage" element={<Logout/>} />

        {/* <Route path="/Chartgt" element={<Chartgt/>} />   */}

        {/* <Navigate to ="/"/> */}
       </Routes>

     </BrowserRouter> 
//FACE SATI
  //   <div className="App">
   
  // <Chartgpt/>

  // {/* <Form/> */}
   
  // </div>

    )
  }

export default App;
