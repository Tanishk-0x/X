import React from 'react'
import lg from '../Assets/lg1.jpg'
import { PiCheckCircleFill } from "react-icons/pi";
import '../Style/Signup.css'

const Signup = () => {
  return (
    
    
    <div className="signup-main">
      <div className="signup-container">
        <div className="img">
          <img src={lg} />
        </div>

        <div className="signup-content">
          <h2>
            Signup
          </h2>

          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Password' />

          <button>Signup</button>

          <p>Already have account <span>Login</span></p>

          <div className="signup-cont">
            <p><PiCheckCircleFill /> <span>Lorem ipsum dolor sit amet consectetur</span></p>
            <p><PiCheckCircleFill /> <span>Lorem ipsum dolor sit amet consectetur</span></p>
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default Signup
