import React, { useEffect, useState } from 'react'
import '../Style/NextPage.css'
import { FaBolt, FaRocket, } from 'react-icons/fa';
import axios from 'axios' ; 
import { useNavigate } from 'react-router-dom';
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaLightbulb } from "react-icons/fa";

import bdlogo from '../Assets/Backendlogo.jpg';
import dbmslogo from '../Assets/dbmslogo.jpg' ; 
import dsalogo from '../Assets/dsalogo.jpg' ; 
import mernlogo from '../Assets/mernlogo.jpg' ; 
import nodejslogo from '../Assets/nodejslogo.jpg' ; 
import ooplogo from '../Assets/ooplogo.jpg' ; 
import oslogo from '../Assets/oslogo.jpg' ; 
import pflogo from '../Assets/pflogo.jpg' ; 
import reactlogo from '../Assets/reactlogo.jpg' ; 

import sqllogo from '../Assets/sqllogo.jpg' ; 
import javalogo from '../Assets/javalogo.jpg' ; 
import cnlogo from '../Assets/cnlogo.jpg' ; 
import fsdlogo from '../Assets/fsdlogo.jpg' ; 
import wflogo from '../Assets/wflogo.jpg' ; 
import behaviorallogo from '../Assets/behaviorallogo.jpg' ; 
import deploymentlogo from '../Assets/deploymentlogo.jpg' ; 
import fdlogo from '../Assets/fdlogo.jpg' ; 
import jslogo from '../Assets/jslogo.jpg' ; 

import { PiPlantDuotone } from "react-icons/pi";
import { FaRedhat } from "react-icons/fa";
import { IoBonfireSharp } from "react-icons/io5";


const NextPage = () => {

    //~-----------------------------------------------------------

    const navigate = useNavigate() ; 

    const [name , setName] = useState('') ; 
    const [email , setEmail] = useState('') ; 
    const [score , setScore] = useState('') ; 
    const [totalTest , setTotalTest] = useState('') ; 
    const [previous , setPrevious] = useState('') ; 
    const [loading , setLoading] = useState(false) ; 

    const [code , setCode] = useState('NodeJS') ; 
    const [numberOfQue , setNumberOfQue] = useState(5) ; 
    const [flag , SetFlag] = useState('0') ; 

    const [Questions , setQuestions] = useState([]) ; 
    const [currentQuestion , setCurrentQuestion] = useState(null) ; 
    const [currentIndex , setCurrentIndex] = useState(0) ;
    const [currentHint , setCurrentHint] = useState(null) ;  
    const [hint , setHint] = useState('Hint Will Appear Here ..') ; 
    const [generating , setGenerating] = useState(false) ; 

    const [currentAnswer , setCurrentAnswer] = useState("") ; 
    const [submission , setSubmission] = useState(null) ; 
    const [Report , setReport] = useState(null) ; 

    const [fontSize , setFontSize] = useState(18) ;
    const [hintUsed , setHintUsed] = useState(0) ; 
    const [totalScore , setTotalScore] = useState(0) ; 

    const [diff , setDiff] = useState("Newbie") ; 


    useEffect(() => {
        const fetchDetails = async () => {
            const res = await axios.get("https://prepdrilbackend.onrender.com/user/details" , 
                {withCredentials : true}
            ); 

            setName(res.data.name) ;
            setEmail(res.data.email) ; 
            setTotalScore(res.data.score) ; 
            setTotalTest(res.data.totalTests) ; 
            setPrevious(res.data.previous) ; 

        }
        fetchDetails() ;  
    },[]); 


    const LogOut = async () => {
        setLoading(true) ; 
         await axios.get("https://prepdrilbackend.onrender.com/auth/logout" ,
             {withCredentials : true}); 
             navigate('/login') ; 
        setLoading(false) ; 
    }


    const FetchData = async () => {
        try {
            setLoading(true);
            setGenerating(true); 
            const res = await axios.post(
                "https://prepdrilbackend.onrender.com/ai/getresponse",
                { code: code, no: numberOfQue, flag: flag , diff : diff },
                { withCredentials: true }
            );

            const temp = res.data;
            const cleanedjson = temp.replace(/```json|```/g, '').trim();
            const Data = JSON.parse(cleanedjson);

            
            setQuestions(Data.questions);
            setCurrentQuestion(Data.questions[0]?.question || "");
            setCurrentHint(Data.questions[0]?.hint || "" ) ; 
            setGenerating(false) ;

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const next = () => {
        if (!Questions || Questions.length === 0) return;

        if (currentIndex < Questions.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            setCurrentQuestion(Questions[nextIndex].question);
            setCurrentHint(Questions[nextIndex].hint) ; 
            setHint("") ; 
        }

        Questions[currentIndex].ans = currentAnswer ; 
        setCurrentAnswer("") ; 
        setSubmission(Questions) ; 

        if( currentIndex === Questions.length-1 ){
            FetchReport() ; 
        }
    };

    const ShowHint = () => {
        const hintValue = currentHint ; 
        setHint(hintValue) ; 
        setHintUsed(hintUsed + 1) ; 
    }

    
    const FetchReport = async () => {
        try {
            setLoading(true) ; 
            const payload = JSON.stringify(submission);
            const res = await axios.post("https://prepdrilbackend.onrender.com/ai/getresponse" , 
                { code: payload, no: numberOfQue, flag: '1' , diff : "" } , {withCredentials : true} 
            ); 
            
            const temp = res.data;
            const cleanedjson = temp.replace(/```json|```/g, '').trim();
            const Data = JSON.parse(cleanedjson);

            setReport(Data) ; 


            const scr = parseInt(Data.score) ; 
            const score = scr - hintUsed ; 

            const response = await axios.post("https://prepdrilbackend.onrender.com/user/scr" , 
                {score : score , code : code  } , {withCredentials : true} 
            ); 
            setTotalScore(response.data.score);
            setPrevious(response.data.previous); 
            setLoading(false) ; 
            
        }
        
        catch (error) {
            console.log(error) ;     
        }
    }


    const KeyPressHandler = (event) => {
        
        if(event.key === "Enter"){
            next() ; 
        } 
    }



    //~-----------------------------------------------------------

  return (

    <div className="n-main">

        <header className="n-header">
            <div className='n-credential'>
                <div className='hii'>
                    Hii
                </div>
                <div>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
            </div>

            <div className='next-page-btns'>
                <button onClick={FetchData}> {loading ? 'Loading' : 'Start Test'} </button>
                <button onClick={FetchReport}> {loading ? 'Loading' : 'Submit'} </button>
                <button onClick={LogOut}> {loading ? 'Loading' : 'Logout'} </button>
                
            </div>

            
        </header>


        <div className="n-bars">
            <div className=" n-bar n-1">
                <p className='n-title'>Score</p>
                <p className='n-val'>{totalScore}</p>
            </div>
            <div className="n-bar n-2">
                <p className='n-title'>TotalTests</p>
                <p className='n-val'>{totalTest}</p>
            </div>
            <div className="n-bar n-3">
                <p className='n-title'>Previous</p>
                <p className='n-val n-prev'> {previous} </p>
            </div>
            <div className="n-4">
                <div onClick={() => setCode("NodeJS")}>
                    <img src={nodejslogo} draggable="false" />
                </div>
                <div onClick={() => setCode("Backend Development")}>
                    <img src={bdlogo} draggable="false" />
                </div>
                <div onClick={() => setCode("MERN Stack")}>
                    <img src={mernlogo} draggable="false" />
                </div>
                <div onClick={() => setCode("Data Structures & Algorithms")}>
                    <img src={dsalogo} draggable="false" />
                </div>
                <div onClick={() => setCode("ReactJS")}>
                    <img src={reactlogo} draggable="false" />
                </div>
                <div onClick={() => setCode("Object Oriented Programming")}>
                    <img src={ooplogo} draggable="false" />
                </div>
                <div onClick={() => setCode("DataBase Management System")}>
                    <img src={dbmslogo} draggable="false" />
                </div>
                <div onClick={() => setCode("Operating System")}>
                    <img src={oslogo} draggable="false" />
                </div>
                <div onClick={() => setCode("Programming Fundamentals")}>
                    <img src={pflogo} draggable="false" />
                </div>
                <div onClick={() => setCode("SQL")}>
                    <img src={sqllogo} draggable="false"  />
                </div>
                <div onClick={() => setCode("Java")}>
                    <img src={javalogo}  draggable="false" />
                </div>
                <div onClick={() => setCode("Computer Networking")}>
                    <img src={cnlogo}  draggable="false" />
                </div>
                <div onClick={() => setCode("FullStack Development")}>
                    <img src={fsdlogo}  draggable="false" />
                </div>
                <div onClick={() => setCode("Web Fundamentals")}>
                    <img src={wflogo}  draggable="false" />
                </div>
                <div onClick={() => setCode("Behavioral")}>
                    <img src={behaviorallogo} draggable="false"  />
                </div>
                <div onClick={() => setCode("Deployment")}>
                    <img src={deploymentlogo} draggable="false"  />
                </div>
                <div onClick={() => setCode("Frontend Development")}>
                    <img src={fdlogo} draggable="false"  />
                </div>
                <div onClick={() => setCode("Javascript")}>
                    <img src={jslogo}  draggable="false" />
                </div>
                
            </div>
        </div>

        <div className="n-questions">
            <div className='n-q'>Que:</div>
            <div className="q-main">
                <div className="q-1">
                    <div className="que">
                        <p>Question : <span> {currentQuestion} </span></p>
                    </div>
                    <div className="q-controls">
                        <button onClick={next}> <TbPlayerTrackNextFilled /> </button>
                        <button onClick={ShowHint}> <FaLightbulb /> </button>
                    </div>
                </div>
                <div className="q-2">
                    { generating ?
                     <p> We are generating {numberOfQue} {diff} level interview questions of {code} for you ..  </p> :
                     <p> {currentIndex+1} / {numberOfQue} </p> }
                </div>
            </div>
        </div>

        <div className="answer">
            <div className="hint">
                <div className="act-hint">
                   <p>💡Hint : <span>{hint}</span> </p>
                </div>
                <div className="h-controls">
                    <div className='f-size'>
                        <button onClick={() => setFontSize(fontSize+2)}> + </button>
                        <button onClick={() => setFontSize(fontSize-2)}> - </button>
                    </div>
                    <div className='difficulty-btns'>
                        <button onClick={() => setDiff("Newbie")}><PiPlantDuotone /></button>
                        <button onClick={() =>setDiff("Intermediate")}><FaRedhat /></button>
                        <button onClick={() => setDiff("Advanced")}><IoBonfireSharp /></button>
                    </div>
                    <div className='number-btns'>
                        <button onClick={() => setNumberOfQue(8)}>8</button>
                        <button onClick={() => setNumberOfQue(10)}>10</button>
                        <button onClick={() => setNumberOfQue(15)}>15</button>
                    </div>
                </div>
            </div>
            <div className="ans">
                <textarea value={currentAnswer} style={{ fontSize: `${fontSize}px`}} spellCheck="false" autoComplete="off" autoCorrect="off"
                onChange={(e) => setCurrentAnswer(e.target.value)}
                onKeyDown={KeyPressHandler}
                 placeholder='Write Your Answer Here'></textarea>
            </div>
        </div>


        {Report && (
            <div className="report-container">
                <h2 className="report-title">Evaluation Report</h2>
                <div className="total-score">
                Overall Score: <span className='r-score'>{(Report.score)-hintUsed} / 10</span> <br />
                <div className="temp-score">
                    <span> Hint Used : {hintUsed} </span>  <span>  </span>  <span>Score : {(Report.score)} </span>
                </div>
                </div>

                <div className="cards-container">
                {Report.remarks?.map((item, index) => (
                    <div className="card" key={index}>
                    <h3 className="q-title">Question {index + 1}</h3>

                    <div className="remark-section">
                        <p><strong>Remark:</strong> {item.remark}</p>
                        <p><strong>Your Answer:</strong> {item.userAns || <em>No answer provided</em>}</p>
                        <p><strong>Correct Answer:</strong> {item.correctAns}</p>
                        <p><strong>Accuracy:</strong> {item.accuracyLevel}</p>
                        <p><strong>Improvement Tips:</strong> {item.improvementTips}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        )}



    </div>

  )
}

export default NextPage
