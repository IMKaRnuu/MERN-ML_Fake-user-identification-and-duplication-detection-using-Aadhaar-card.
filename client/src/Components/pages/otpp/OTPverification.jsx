import './otps.css'
import { Navigate } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
//import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import withAuth from './withAuth';


const OTPverification = () => {


  const [phoneNumber, setPhoneNumber] = useState();
  const [channel, setChannel] = useState('sms');
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  let data2 
  useEffect(() => {
    (async () => {
      const response = await fetch('/getPhoneNumber');
      const data2 = await response.json();
      console.log(data2);
      console.log(data2.phonenumber);

      setPhoneNumber(data2.phonenumber);
       console.log(phoneNumber)
    })();
  }, []);

  const handleSendCode = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/sendcode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phonenumber: phoneNumber, channel: channel }),
      });
      const data = await response.json();
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      setStatus(data.status);
      setMessage(data.message);
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      setStatus('error');
      setMessage('An error occurred while sending the OTP');
    }
  };

  const handleVerify = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phonenumber: phoneNumber, code: code }),
      });
      const data = await response.json();
      setStatus(data.status);
      setMessage(data.message);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      //navigate("/face");
      if (data.status === 'success') {
        alert("OTP VERIFIED")
        navigate('/face');
      }
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      setStatus('error');

      setMessage('An error occurred while verifying the user');
    }
  };

  return (
<div class="back">
{isLoading && (
        <div className="loading-overlay">
          <HashLoader color="#5F9FE2" size={80} margin={10} />
        </div>
      )}

<div className="container">
<div>
      <h1>Send OTP</h1>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          defaultValue={phoneNumber}
          // value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          readOnly
        />
      </div>
      <div>
        <label htmlFor="channel">Channel:</label>
        <select id="channel" value={channel} onChange={(e) => setChannel(e.target.value)}>
          <option value="sms">SMS</option>
          {/* <option value="voice">Voice</option> */}
        </select>
      </div>
      <button onClick={handleSendCode}>Send Code</button>
      {status === 'success' && <p>{message}</p>}
      {status === 'failure' && <p >{message}</p>}
      {status === 'error' && <p className="error">{message}</p>}
</div>
<div>
      <h1>Verify OTP</h1>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
           readOnly
        />
      </div>
      <div>
        <label htmlFor="code">Code:</label>
        <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button type="submit" onClick={handleVerify} >
              Verify
            </button>
          </div>
          {message && <p className={`${status === 'success' ? 'success' : 'error'}`}>{message}</p>}  
          </div>    
    </div>
    </div>
  );
};

export default OTPverification;

