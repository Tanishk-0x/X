import React from 'react'
import '../Style/NextPage.css'
import { FaBolt, FaRocket, FaStar, FaShieldAlt, FaLightbulb, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import nodelogo from '../Assets/node-logo.jpg'
import behlogo from '../Assets/beh-logo.jpg'

const NextPage = () => {

  return (

    <div className="n-main">

        <header className="n-header">
            <div className='n-credential'>
                <div className='hii'>
                    Hii
                </div>
                <div>
                    <p>namexyz</p>
                    <p>emailxyz@gmail.com</p>
                </div>
            </div>

            <button>Logout</button>
        </header>


        <div className="n-bars">
            <div className=" n-bar n-1">
                <p className='n-title'>Score</p>
                <p className='n-val'>85</p>
            </div>
            <div className="n-bar n-2">
                <p className='n-title'>TotalTests</p>
                <p className='n-val'>23</p>
            </div>
            <div className="n-bar n-3">
                <p className='n-title'>Previous</p>
                <p className='n-val'>NodeJs</p>
            </div>
            <div className="n-4">
                <div>
                    <img src={nodelogo}/>
                </div>
                <div>
                    <img src={behlogo}/>
                </div>
                <div>
                    <img src={nodelogo}/>
                </div>
                <div>
                    <img src={nodelogo}/>
                </div>
                <div>
                    <img src={nodelogo}/>
                </div>
                <div>
                    <img src={nodelogo}/>
                </div>
                <div>
                    <img src={nodelogo}/>
                </div>
                <div>
                    <img src={nodelogo}/>
                </div>
                <div>
                    <img src={nodelogo}/>
                </div>
                <div>
                    <img src={nodelogo}/>
                </div>
                <div>
                    <img src={nodelogo}/>
                </div>
                <div>
                    <img src={nodelogo}/>
                </div>
                <div>
                    <img src={nodelogo}/>
                </div>
            </div>
        </div>

        <div className="n-questions">
            <div className='n-q'>Que:</div>
            <div className="q-main">
                <div className="q-1">
                    <div className="que">
                        Question : Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nisi neque hic labore libero dolorum!
                    </div>
                    <div className="q-controls">
                        <button><FaBolt/></button>
                        <button><FaRocket/></button>
                    </div>
                </div>
                <div className="q-2">
                    Lorem ipsum dolor sit amet consectetur.
                </div>
            </div>
        </div>

        <div className="answer">
            <div className="hint">
                <div className="act-hint">
                   💡Hint Will Appear Here .. 
                </div>
                <div className="h-controls">
                    <div className='f-size'>
                        <button>+</button>
                        <button>-</button>
                    </div>
                    <div className='difficulty-btns'>
                        <button><FaRocket/></button>
                        <button><FaRocket/></button>
                        <button><FaRocket/></button>
                    </div>
                    <div className='number-btns'>
                        <button>8</button>
                        <button>12</button>
                        <button>20</button>
                    </div>
                </div>
            </div>
            <div className="ans">
                <textarea name="" id="" placeholder='Write Your Answer Here'></textarea>
            </div>
        </div>

    </div>

  )
}

export default NextPage
