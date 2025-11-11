import React, { useState } from 'react'
import lg from '../Assets/lg1.jpg'
import { PiCheckCircleFill } from "react-icons/pi";
import '../Style/Signup.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email , setEmail] = useState('') ; 
  const [password , setPassword] = useState('') ; 
  const [loading , setLoading] = useState(false) ; 

  const navigate = useNavigate() ; 


  const Login = async () => {
    try {
      setLoading(true) ; 
      const res = await axios.post("http://localhost:5000/auth/login" ,
       {email , password} , {withCredentials : true} ); 
      localStorage.setItem('xyz' , true) ; 
      setLoading(false) ; 
      setEmail("") ; 
      setPassword("") ; 
      toast(res.data.message) ; 
      navigate('/'); 
    }
    
    catch (error) {
      console.log(error) ; 
    }
  }


  return (
    
    <div className="signup-main">
      <div className="signup-container">
        <div className="img">
          <img src={lg} draggable="false" />
        </div>

        <div className="signup-content">
          <h2>
            Welcome Back!
          </h2>

          <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

          <button onClick={Login}> {loading ? 'Loading' : 'Login' } </button>

          <p>New User<span onClick={() => navigate('/signup')}> Signup</span></p>

          <div className="signup-cont">
            <p><PiCheckCircleFill /> <span>Practice Any Tech Subject On Demand</span></p>
            <p><PiCheckCircleFill /> <span>Instant Feedback and Score Reports</span></p>
            <p><PiCheckCircleFill /> <span>Compare Answers with Model Responses</span></p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login
