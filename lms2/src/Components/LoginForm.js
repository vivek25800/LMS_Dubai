import React from 'react'
import '../StyleCode/StudentRegister.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useState ,useEffect} from 'react';
import { base_url } from "./Utils/base_url";

function LoginForm() {
    const navigate=useNavigate()

   
    const[login,setlogin]=useState({email_id:"",password:""})
    const student_login = async () => {
      try {
        if (login.email_id === "" || login.password === "") {
          toast.error("Please enter email and password");
          return;
        }
    
        let resp, resp1;
    debugger
        try {
          resp = await axios.post(`${base_url}/student_login`, login);
        } catch (error) {
          // Handle specific error for the student API
          console.error("Error with student login:", error);
        }
    
        try {
          resp1 = await axios.post(`${base_url}/employee_login`, login);
        } catch (error) {
          // Handle specific error for the employee API
          console.error("Error with employee login:", error);
        }
    
        // Check responses and navigate accordingly
        if (resp && resp.status === 200) {
          toast.success(`Welcome student: ${login.email_id}`);
    
          setTimeout(() => {
            navigate('/Studentdash');
          }, 2000);  // 2 seconds delay
        } else if (resp1 && resp1.status === 200) {
          toast.success(`Welcome employee: ${login.email_id}`);
    
          setTimeout(() => {
            navigate('/Employeedash');
          }, 2000);  // 2 seconds delay
        } else {
          // If neither API responds with status 200, show a general error
          toast.error("Invalid login credentials");
        }
      } catch (error) {
        if (error.response) {
          const { status } = error.response;
    
          // Handle different status codes
          if (status === 404) {
            toast.error("Email ID not registered");
          } else if (status === 400) {
            toast.error("Password does not match");
          } else if (status === 500) {
            toast.error("Server error. Please try again later.");
          } else {
            toast.error("An unexpected error occurred.");
          }
        } else {
          console.log(error);
          toast.error("An error occurred. Please try again later.");
        }
      }
    };
    

  return (
    <div>

        <section className="login-section">
            <div className="main-container main-container-second" id="main-container-div">
                <div className="image-div image-div-second" id="main-img-div">
                    <div className="text-div">
                        <h2>Welcome to Edutech</h2>
                        <p>Kickstart your tech learning journey</p>
                    </div>   
                </div>

                <div className="main-login-form">
                    <div className="login-form" >
                        <h2>Login to your account</h2>
                       
                            <div className="input-group">
                                <label for="username">Username</label>
                                <input type="text" id="username" name="username" placeholder="Enter your username"  onChange={(e)=>setlogin({...login,email_id:e.target.value})} />
                            </div>
                            <div className="input-group">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Enter your password"  onChange={(e)=>setlogin({...login,password:e.target.value})} />
                            </div>
                            <div className="forget-btn">
                                <a href="#">Forget?</a>
                            </div>
                            <div className="btn">
                                <button id="submit-btn" onClick={student_login}>Login</button>
                                <p id="errorMessage" class="error-message">Don't have any account?  <NavLink to={'/register'}>Register</NavLink></p>
                                <button id="google-btn">Continue with google</button>
                            </div>
                            
                    
                        
                    </div>
                </div>
                
            </div>
        </section>
      <ToastContainer/>
    </div>
  )
}

export default LoginForm;
