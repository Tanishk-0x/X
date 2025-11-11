import React, { useEffect, useState } from 'react';
import '../Style/Home.css';
import heroImg from '../Assets/heroimg.jpg'; 
import { FaBolt, FaRocket, FaStar, FaShieldAlt, FaLightbulb, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CgLogIn } from "react-icons/cg";
import demo from '../Assets/demo.mp4';
import axios from 'axios' ; 
import toast from 'react-hot-toast';


const Home = () => {

    const navigate = useNavigate() ; 
    const [auth , setAuth] = useState(false) ; 

    useEffect(()=>{
        const val = localStorage.getItem('xyz'); 
        if(val === 'true'){
            setAuth(true) ; 
        }

    },[]); 


    const LogOut = async () => {
         await axios.get("http://localhost:5000/auth/logout" ,
             {withCredentials : true}); 
             toast("LogOut SuccessFully")
            navigate('/login') ; 
    }




    return (

        <div className="home-main">

            <header className="home-header">
                <div className='h-logo-container'>
                    <p className='h-heading'>
                        <FaBolt className='logo-icon' /><span className='logo-highlight'>The PrepDrill</span>
                    </p>
                </div>
                <div>
                    {
                        auth ? <button className='h-btn' onClick={LogOut}>Logout</button> : 
                        <button className='h-btn' onClick={() => navigate('/login')}>Login</button>
                    }
                </div>
            </header>

            <section className="h-section">
                <div className="hero-left">
                    <h1 className='l-1'>
                        Stop guessing <span className='highlight-text'>Questions,</span> start practicing mastery
                    </h1>
                    <p className='l-2'>
                        Practice any technical subject with AI-generated questions, timed answers, and instant performance reports.
                    </p>
                    <div className='hero-cta'>
                        <button className='h-btn primary-cta' onClick={() => navigate('/main')}>Get Started</button>
                        <a href="#demo"><button className='h-btn secondary-cta'>Watch Demo</button></a>
                    </div>
                </div>

                <div className="hero-right">
                    <img src={heroImg} draggable="false" className='hero-image' />
                </div>
            </section>

            <section id="features" className="features-container">
                <h2>Key Features</h2>
                <div className="features-grid">
                    <div className="feat">
                        <FaRocket className='feat-icon' />
                        <h3>Topics</h3>
                        <p>Practice any tech subject.</p>
                    </div>
                    <div className="feat">
                        <FaStar className='feat-icon' />
                        <h3>Feedback</h3>
                        <p>Actionable steps for mastery.</p>
                    </div>
                    <div className="feat">
                        <FaShieldAlt className='feat-icon' />
                        <h3>Review</h3>
                        <p>Compare against model answer.</p>
                    </div>
                    <div className="feat desktop-only">
                        <FaLightbulb className='feat-icon' />
                        <h3>Intuitive</h3>
                        <p>A simple, clean, and modern interface.</p>
                    </div>
                </div>
            </section>
            
            <section id="demo" className="video-demo-section">
                <h2 className='section-title'>See It In Action: Project Demo</h2>
                <p className='section-subtitle'>Watch a quick tour of our platform's powerful features and clean interface.</p>
                
                <div className="video-player-container">
                    <video 
                        className="demo-video"
                        title="Demo" 
                        autoPlay
                        muted 
                        loop
                    >
                        <source src={demo} type="video/mp4" />
                    </video>
                </div>
            </section>

            <section className="cta-section">
                <h2 className='cta-title'>Ready to Transform Your Preparation?</h2>
                <p className='cta-subtitle'>Your AI interview coach gives instant feedback, detailed scores, and personalized mastery reports now.</p>
                <button className='h-btn primary-cta large-cta' onClick={() => { auth ? navigate('/main') : navigate('/login') }}>Start Preparation</button>
            </section>
            
            <footer id="contact" className="home-footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <p className='h-heading footer-heading'>
                            <FaBolt className='logo-icon' /><span className='logo-highlight'>The PrepDrill</span>
                        </p>
                        <p className='footer-tagline'>Built for scoring, designed for learning.</p>
                    </div>
                    
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <a href="#features">Features</a>
                        <a href="#demo">Demo</a>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <p><FaEnvelope className='contact-icon' /> prepdrill009@gmail.com</p>
                        <p><FaPhone className='contact-icon' /> +91 234 567 890</p>
                        <p><FaMapMarkerAlt className='contact-icon' /> 123 Indore MadhyaPradesh</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Home;