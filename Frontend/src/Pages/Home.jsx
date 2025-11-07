import React from 'react';
import '../Style/Home.css';
import heroImg from '../Assets/heroimg.jpg'; 
import { FaBolt, FaRocket, FaStar, FaShieldAlt, FaLightbulb, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Home = () => {

  //~---------------------------------------------------------------------------

  //~---------------------------------------------------------------------------


    return (

        <div className="home-main">

            <header className="home-header">
                <div className='h-logo-container'>
                    <p className='h-heading'>
                        <FaBolt className='logo-icon' /> NAME <span className='logo-highlight'>LOGO</span>
                    </p>
                </div>
                <nav className='h-nav'>
                    <a href="#features" className='nav-link'>Features</a>
                    <a href="#demo" className='nav-link'>Demo</a> 
                    <a href="#contact" className='nav-link'>Contact</a>
                </nav>
                <div>
                    <button className='h-btn'>Login</button>
                </div>
            </header>

            <section className="h-section">
                <div className="hero-left">
                    <h1 className='l-1'>
                        The Ultimate <span className='highlight-text'>Solution</span> for Your Digital Needs
                    </h1>
                    <p className='l-2'>
                        Harness the power of seamless integration and lightning-fast performance. Stop managing, start creating.
                    </p>
                    <div className='hero-cta'>
                        <button className='h-btn primary-cta'>Get Started</button>
                        <button className='h-btn secondary-cta'>Learn More</button>
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
                        <h3>Speed</h3>
                        <p>Lightning-fast performance guaranteed.</p>
                    </div>
                    <div className="feat">
                        <FaStar className='feat-icon' />
                        <h3>Reliable</h3>
                        <p>99.9% Uptime and constant stability.</p>
                    </div>
                    <div className="feat">
                        <FaShieldAlt className='feat-icon' />
                        <h3>Secure</h3>
                        <p>Industry-leading encryption and protection.</p>
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
                        controls
                        poster="YOUR_VIDEO_POSTER_IMAGE.jpg" 
                        title="Project Demo Video" 
                    >
                        <source src="YOUR_VIDEO_FILE.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            <section className="cta-section">
                <h2 className='cta-title'>Ready to Transform Your Workflow?</h2>
                <p className='cta-subtitle'>Join thousands of satisfied users and start for free today. No credit card required.</p>
                <button className='h-btn primary-cta large-cta'>Start Your Free Trial</button>
            </section>
            
            <footer id="contact" className="home-footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <p className='h-heading footer-heading'>
                            <FaBolt className='logo-icon' /> NAME <span className='logo-highlight'>LOGO</span>
                        </p>
                        <p className='footer-tagline'>Built for performance, designed for you.</p>
                    </div>
                    
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <a href="#features">Features</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Privacy Policy</a>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <p><FaEnvelope className='contact-icon' /> support@namelogo.com</p>
                        <p><FaPhone className='contact-icon' /> +1 234 567 890</p>
                        <p><FaMapMarkerAlt className='contact-icon' /> 123 Digital St, Tech City</p>
                    </div>
                </div>
                <div className="footer-bottom">
                   NAME LOGO. All rights reserved.
                </div>
            </footer>

        </div>
    );
};

export default Home;