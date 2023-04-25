import React from 'react'
import { useState } from 'react';
import './Form.css'
const Form = () => {

  const postData = async (e) => {
    e.preventDefault();

    const { AD_number,fullname,DOB,email,phone,address,profileImage } = user;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
   
      body: JSON.stringify({
        AD_number,
        fullname,
        DOB,
        email,
        phone,
        address,
        profileImage

      }),
    });
  }
  
  const [user, setUser] = useState({
    AD_number: "",
    fullname: "",
    DOB: "",
    email: "",
    phone: "",
    address: "",
    profileImage:"",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleFileInputs = (e) => {
    setUser({ ...user, profileImage: e.target.files[0] });
  };


  return (
<><section class="vh-800 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
              <div class="card shadow-2-strong card-registration" >
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Validation Form</h3>
                  <form  className='login' id='login' method="post">
                    <div class ="row">
                      <div class="col-md-6 mb-4">
      
                        <div class="form-outline">
                          <label class="form-label" for="Adhar No">Aadhar Number</label>
                          <input type="number" 
                          min="1"
                          max="16"
                          id="AD_number" 
                          name="AD_number"

                      value={user.AD_number}
                      onChange={handleInputs}
                          
                          class="form-control form-control-lg" />
                          
                        </div>
      
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-10 mb-4">
      
                        <div class="form-outline">
                          <label class="form-label" for="firstName">Full Name(As Per Aadhar Card)</label>
                          <input type="text" 
                          id="fullname"
                          name="fullname" 
                          value={user.fullname}
                          onChange={handleInputs} 
                          class="form-control form-control-lg" />
                          
                        </div>
      
                      </div>


                    </div>
      
                    <div class="row">
                      <div class="col-md-6 mb-4 d-flex align-items-center">
      
                        <div class="form-outline datepicker w-100">
                          <label for="birthdayDate" class="form-label">DOB( Date Of Birth )</label>
                          <input type="date" 
                          id="DOB"
                          name="DOB"
                          value={user.DOB}
                          onChange={handleInputs} 
                          class="form-control form-control-lg"  />
                          
                        </div>
      
                      </div>
                      <div class="col-md-6 mb-4">
      
                        <h6 class="mb-2 pb-1">Gender: </h6>
      
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" 
                          type="radio" 
                          name="inlineRadioOptions" 
                          id="FEMALE"
                            value="option1" checked />
                          <label class="form-check-label" for="femaleGender">Female</label>
                        </div>
      
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="MALE"
                            value="option2" />
                          <label class="form-check-label" for="maleGender">Male</label>
                        </div>
      
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="OTHER"
                            value="option3" />
                          <label class="form-check-label" for="otherGender">Other</label>
                        </div>
      
                      </div>
                    </div>
      
                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2">
      
                        <div class="form-outline">
                          <input type="email" 
                          id="email" 
                          name="email"
                          value={user.email}
                          onChange={handleInputs} 
                          class="form-control form-control-lg" />
                          <label class="form-label" for="emailAddress">Email</label>
                        </div>
      
                      </div>
                      <div class="col-md-6 mb-4 pb-2">
      
                        <div class="form-outline">
                          <input type="tel" 
                          id="phone" 
                          name="phone"
                          value={user.phone}
                          onChange={handleInputs} 
                          class="form-control form-control-lg" />
                          <label class="form-label" for="phoneNumber">Phone Number</label>
                        </div>
      
                      </div>
                    </div>
                    
                    <div>
                    <div>
        <label htmlFor="profileImage">Profile Image:</label>
        <input 
  type="file" 
  id="profileImage" 
  name="profileImage"
  accept=".jpg, .jpeg, .png"
  value={user.profileImage}
  onChange={handleFileInputs}
  className="form-control form-control-lg" 
/>
      </div>
                    </div>
      
                    <div class="row">
                      <div class="col-md-12 ">

                        <div class="form-outline">
                          <label class="form-label" for="Address">Address</label>
                          <textarea class="form-control" 
                          id="address" 
                          name="address"
                          value={user.address}
                          onChange={handleInputs} 
                          rows="4"></textarea>
                        </div>

                      </div>
                    </div>
      
                    <div class="mt-4 pt-2">
                 
                      <button type="submit" 
                      
                      class="btn btn-primary" 
                      value="login"
                      name="login"
                      onClick={postData}>Submit</button>
                      
                    </div>
      
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>
  )
}
export default Form
