import React, { useContext } from 'react'
import './main.css'
import { Context } from '../../Context/Context'
import MarkdownRenderer from './Marked'
import ai from '../../assets/ai-unscreen (1).gif'
export default function Main() {

    const {onSent, recentPrompt, showResult,setRecentPrompt, loading, resultData, setInput, input} = useContext(Context)
    const loadPrompt = async (prompt)=>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }



  return (
    <div className='main'>
        <div className="nav">
            <p>Vision AI</p>
            <i className="fa-solid fa-user-astronaut"></i>
        </div>
        <div className="main-container">

            {!showResult ? 
            <>
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p color='#d0d3dc'>How can I help you today? </p>
            </div>
            <div className="cards">
                <div onClick={()=>{loadPrompt("What are some creative ways to increase productivity during work hours?")}} className="card" >
                    <p>What are some creative ways to increase productivity during work hours?</p>
                    <i  className="fa-regular fa-lightbulb fa-beat-fade"></i>
                </div >
                <div className="card" onClick={()=>{loadPrompt("Explain the key differences between machine learning and deep learning models.")}}>
                    <p>Explain the key differences between machine learning and deep learning models.</p>
                    <i className="fa-regular fa-lightbulb fa-beat-fade"></i>
                </div>
                <div className="card" onClick={()=>{loadPrompt("What are the most common challenges faced by developers using React for web development?")}}>
                    <p>What are the most common challenges faced by developers using React for web development?</p>
                    <i className="fa-regular fa-lightbulb fa-beat-fade"></i>
                </div>
                <div className="card" onClick={()=>{loadPrompt("Provide some effective strategies to improve time management for students?")}}>
                    <p>Provide some effective strategies to improve time management for students?</p>
                    <i className="fa-regular fa-lightbulb fa-beat-fade"></i>
                </div>
            </div>


            </> :
            <div className='result'>
                <div className="result-title">
                    <i className="fa-solid fa-user-astronaut"></i>
                    <p style={{color:'white'}}>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <div>

{/*                 <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={30} height={30}>
                    <path
                        d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z"
                        fill="url(#prefix__paint0_radial_980_20147)"
                    />
                    <defs>
                        <radialGradient
                        id="prefix__paint0_radial_980_20147"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)"
                        >
                        <stop offset=".067" stopColor="#9168C0" />
                        <stop offset=".343" stopColor="#5684D1" />
                        <stop offset=".672" stopColor="#1BA1E3" />
                        </radialGradient>
                    </defs>
                    </svg> */}
                    
                    <img src={ai} style={{height:'30px', width:'30px'}} alt="" />
                    </div>
                    {loading ?
                    
                    <div className='loader'>

                        <hr />
                        <hr />
                        <hr />

                    </div>
                    : 
                    <MarkdownRenderer markdownContent={resultData} />
                    }
                </div>
            </div>
            }


<div className="main-bottom">
    <div style={{background:'#2e335a'}} className="search-box">
        <input 
            type="text" 
            onChange={(e) => setInput(e.target.value)} 
            value={input} 
            style={{background:'#2e335a', color:'#f5f7fa'}}
            placeholder="Enter prompt here"
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    onSent();
                }
            }} 
        />
        <div>
            {input ? (
                <i style={{color:'white'}}
                    onClick={() => { onSent(); }} 
                    className="fa-solid fa-paper-plane"
                ></i>
            ) : null}
        </div>
    </div>
    <p className="bottom-info">
        Code by Mohammed Shujath Nawaz Vision AI @2024
    </p>
</div>

        </div>
    </div>
  )
}
