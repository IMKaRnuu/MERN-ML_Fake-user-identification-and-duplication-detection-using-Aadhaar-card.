
//TUSHAR
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from './logout.module.css';
import { HashLoader } from 'react-spinners';

function ExamPage() {
  const navigate = useNavigate();
  const [isExamCompleted, setIsExamCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if exam has already been completed by looking for the examCompleted cookie
    const examCompleted = document.cookie.includes('examCompleted=true');
    setIsExamCompleted(examCompleted);
  }, []);

  const handleExamSubmit = async () => {
    try {
      setIsLoading(true);
      // Make a POST request to submit the exam and set the examCompleted cookie
      const response = await fetch('submit-exam', {
        method: 'POST',
      });
      if (response.ok) {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        // If the exam was successfully submitted, set the examCompleted flag to true
        setIsExamCompleted(true);
        document.cookie = 'examCompleted=true; path=/;';
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      // Make a POST request to clear the examCompleted cookie and log out the user
      const response = await fetch('/logout', {
        method: 'POST',
      });
      if (response.ok) {
        // If the user is successfully logged out, redirect to the login page
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleQuestionChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <div className='examback'>

{isLoading && (
        <div className="loading-overlay">
          <HashLoader color="#5F9FE2" size={80} margin={10} />
        </div>
      )}

      <nav className={Logout.nav1}>
      <h1>Exam Page</h1>
        
            <button className={Logout.btn1} onClick={handleLogout}>
              Logout
            </button>
       
      </nav>
      <div className='div1'>
        {isExamCompleted ? (
        //  <h1>Exam submitted </h1>

        <p><h3>Exam Submitted Successfully!!</h3> <br></br>
              <h4><b>Click on logout to Exit</b></h4>
       </p>
          
        ) : (
          <form className={Logout.form1}>
            <h2><b>Exam Form</b></h2>
                     <label>
                         Q1. 2+2 = ? :
                         <input type="text" name="Name" />
                       </label>
                       <label>
                         Q2. National Bird :
                        <input type="text" name="email" />
                       </label>
                      <label>
                         Q3. 10 X 2 = ?:
                         <input type="text" name="branch" />
                       </label>
                       {/* <label>
                         Div:
                         <input type="text" name="div" />
                       </label>
                       <label>
                         Roll no:
                         <input type="text" name="rollNo" />
                       </label> */}
                      <label>
                         Q1. What is the capital of India?
                         <select
                          value={answers[0] || ''}
                          onChange={(e) => handleQuestionChange(0, e.target.value)}
                        >
                          <option value="">Select an option</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Kolkata">Kolkata</option>
                          <option value="Chennai">Chennai</option>
                        </select>
                      </label>
                      <br />
                      <label>
                        Q2. What is the largest planet in our solar system?
                        <select value={answers[1] || ''} onChange={(e) => handleQuestionChange(1, e.target.value)}>
                          <option value="">Select an option</option>
                          <option value="Jupiter">Jupiter</option>
                          <option value="Saturn">Saturn</option>
                          <option value="Neptune">Neptune</option>
                          <option value="Uranus">Uranus</option>
                        </select>
                      </label>
                      <br />
                      <button class={Logout.exam1} onClick={handleExamSubmit}>Submit Exam</button>
                    </form>
        )}
      </div>
    </div>
  );
}

export default ExamPage;