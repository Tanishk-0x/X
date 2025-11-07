import React, { useState  } from 'react'
import lg from '../Assets/lg1.jpg'
import { PiCheckCircleFill } from "react-icons/pi";
import '../Style/Signup.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate() ; 

  const [name , setName] = useState('') ; 
  const [email , setEmail] = useState('') ; 
  const [password , setPassword] = useState('') ; 
  const [loading , setLoading] = useState(false) ; 

  const Signup = async () => {
    try {
        setLoading(true) ; 
        const res = await axios.post("http://localhost:5000/auth/signup" ,
          { name , email , password } , {withCredentials : true} 
        ); 
        console.log(res) ; 
        setName("") ; 
        setEmail("") ; 
        setPassword("") ; 
        setLoading(false) ; 
        toast(res.data.message);
        navigate('/login')
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
            Create An Account
          </h2>

          <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

          <button onClick={Signup}> {loading ? 'Loading' : 'Signup' } </button>

          <p>Already have account <span onClick={() => navigate('/login')}>Login</span></p>

          <div className="signup-cont">
            <p><PiCheckCircleFill /> <span>Practice Any Tech Subject On Demand</span></p>
            <p><PiCheckCircleFill /> <span>Instant Feedback and Score Reports</span></p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Signup
