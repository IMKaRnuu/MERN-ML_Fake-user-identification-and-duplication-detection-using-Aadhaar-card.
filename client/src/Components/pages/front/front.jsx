// import React from 'react';
// import './front.css'

// import { useNavigate } from "react-router-dom";

// function Front() {
//     const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate('/Validation');
//   };

//   return (
//     <div className="front">
//       <div id="logo">
//       <img src="/Adhaar-Logo.png" alt="Logo" />
//       </div>
//       <h1 class="headline1 anim-fade-in">Welcome to Aadhaar Based Enrollment System</h1>
//       <button class="myButton1 anim-slide-in" onClick={handleGetStarted}>Get Started</button>
      
//       <div className="d1">

//         <div id="top-left">
//         <a href="https://uidai.gov.in/en/my-aadhaar/get-aadhaar.html">
//         <h3>Get Aadhaar</h3>
//         </a>
//         </div>
//         <div id="top-right"><a href="https://uidai.gov.in/en/my-aadhaar/update-aadhaar.html">
//         <h3>Update Aadhaar</h3>
//         </a>
//         </div>
//         <div id="bottom-left">  <a href="https://uidai.gov.in/en/my-aadhaar/avail-aadhaar-services.html">
//         <h3>Aadhaar Services</h3>
//         </a> 
//         </div>
//         <div id="bottom-right"><a href="https://uidai.gov.in/en/my-aadhaar/avail-aadhaar-services.html">
//         <h3>About your Aadhaar</h3>
//         </a>
//         </div>
//       </div>
      
  

//     </div>
//   );
// }
// export default Front;



//working __> with loading
// import React, { useState } from 'react';
// import './front.css';
// import { useNavigate } from "react-router-dom";
// import { BeatLoader } from 'react-spinners';

// function Front() {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     setLoading(true);
//     setTimeout(() => {
//       navigate('/Validation');
//       setLoading(false);
//     }, 2000);
//   };

//   return (
//     <div className="front">
//       {loading ? (
//         <div className="loading-overlay">
//           <BeatLoader color={'#36D7B7'} loading={loading} />
//         </div>
//       ) : null}
//       <div id="logo">
//         <img src="/Adhaar-Logo.png" alt="Logo" />
//       </div>
//       <h1 className="headline1 anim-fade-in">
//         Welcome to Aadhaar Based Enrollment System
//       </h1>
//       <button className="myButton1 anim-slide-in" onClick={handleGetStarted}>
//         Get Started
//       </button>

//       <div className="d1">
//         <div id="top-left">
//           <a href="https://uidai.gov.in/en/my-aadhaar/get-aadhaar.html">
//             <h3>Get Aadhaar</h3>
//           </a>
//         </div>
//         <div id="top-right">
//           <a href="https://uidai.gov.in/en/my-aadhaar/update-aadhaar.html">
//             <h3>Update Aadhaar</h3>
//           </a>
//         </div>
//         <div id="bottom-left">
//           <a href="https://uidai.gov.in/en/my-aadhaar/avail-aadhaar-services.html">
//             <h3>Aadhaar Services</h3>
//           </a>
//         </div>
//         <div id="bottom-right">
//           <a href="https://uidai.gov.in/en/my-aadhaar/avail-aadhaar-services.html">
//             <h3>About your Aadhaar</h3>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Front;

// import React, { useState } from 'react';
// import './front.css';
// import { BeatLoader } from 'react-spinners';

// import { useNavigate } from "react-router-dom";

// function Front() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const handleGetStarted = () => {
//     setLoading(true);
//     setTimeout(() => {
//       navigate('/Validation');
//       setLoading(false);
//     }, 2000);
//   };

//   return (
//     <div className="front" style={{ filter: loading ? 'blur(5px)' : '' }}>
//       {loading && (
//         <div className="spinner">
//           <BeatLoader size={25} color={'#fff'} />
//         </div>
//       )}
//       <div id="logo">
//         <img src="/Adhaar-Logo.png" alt="Logo" />
//       </div>
//       <h1 className="headline1 anim-fade-in">Welcome to Aadhaar Based Enrollment System</h1>
//       <button className="myButton1 anim-slide-in" onClick={handleGetStarted}>Get Started</button>

//       <div className="d1">
//         <div id="top-left">
//           <a href="https://uidai.gov.in/en/my-aadhaar/get-aadhaar.html">
//             <h3>Get Aadhaar</h3>
//           </a>
//         </div>
//         <div id="top-right">
//           <a href="https://uidai.gov.in/en/my-aadhaar/update-aadhaar.html">
//             <h3>Update Aadhaar</h3>
//           </a>
//         </div>
//         <div id="bottom-left">
//           <a href="https://uidai.gov.in/en/my-aadhaar/avail-aadhaar-services.html">
//             <h3>Aadhaar Services</h3>
//           </a>
//         </div>
//         <div id="bottom-right">
//           <a href="https://uidai.gov.in/en/my-aadhaar/avail-aadhaar-services.html">
//             <h3>About your Aadhaar</h3>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Front;

//Working-->Specific space is blured
import React, { useState } from 'react';
import './front.css';

import { useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

function Front() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGetStarted = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/Validation');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="front">
      <div id="logo">
        <img src="/AAlog.png" alt="Logo" />
      </div>
      <h1 className="headline1 anim-fade-in">
      Fake user identification and duplication detection using Aadhaar card
      </h1>
      <button className="myButton1 anim-slide-in" onClick={handleGetStarted}>
        Get Started
      </button>

      <div className={`d1 ${loading ? 'blur' : ''}`}>
        <div id="top-left">
          <a href="https://uidai.gov.in/en/my-aadhaar/get-aadhaar.html" target="_blank">
            <h3>Get Aadhaar</h3>
          </a>
        </div>
        <div id="top-right">
          <a href="https://uidai.gov.in/en/my-aadhaar/update-aadhaar.html" target="_blank">
            <h3>Update Aadhaar</h3>
          </a>
        </div>
        <div id="bottom-left">
          <a href="https://uidai.gov.in/en/my-aadhaar/avail-aadhaar-services.html" target="_blank">
            <h3>Aadhaar Services</h3>
          </a>
        </div>
        <div id="bottom-right">
          <a href="https://uidai.gov.in/en/my-aadhaar/avail-aadhaar-services.html" target="_blank">
            <h3>About your Aadhaar</h3>
          </a>
        </div>
      </div>

      {loading && (
        <div className="loading-overlay">
          <HashLoader color="#5F9FE2" size={80} margin={10} />
        </div>
      )}
    </div>
  );
}

export default Front;


