import React, { useContext, useState } from "react";
import "./sidebar.css";
import { Context } from "../../Context/Context";

export default function Sidebar() {

    const [extended, setExtended] = useState(false)
    const {onSent, prevPrompt, setRecentPrompt, newChat} = useContext(Context)
    const loadPrompt = async (prompt)=>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
  return (
    <div className="sidebar">
      <div className="top">
        <div className="menu" onClick={()=>{
            setExtended(prev=>!prev)
        }}>

        <i className="fa-solid fa-bars"></i>
        </div>
        <div onClick={()=>{newChat()}} className="new-chat">
          <i className="fa-solid fa-plus "></i>
          {extended ? <p>New Chat</p>: null}
        </div>
        {extended ?        <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index)=>{
                return (
                    <div onClick={()=>{loadPrompt(item)}}  className="recent-entry" key={index}>
                    <i className="fa-regular fa-message"></i>
                        <p>{item.slice(0,18)} ...</p>
                    </div>
                )
            })}
        </div> : null
        
    }

      </div>
      <div className="bottom ">
        <div className="bottom-item recent-entry icon-container">
            <i className="fa-regular fa-circle-question"></i>
            <span className="tooltip-text">Just prompt to get the answer</span>
            {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry  icon-container">
        <i className="fa-solid fa-clock-rotate-left"></i>
        <span className="tooltip-text">Open the menu to track recent activity</span>
            {extended ? <p>Activity</p>: null}
        </div>
        <div className="bottom-item recent-entry  icon-container">
        <i className="fa-solid fa-gear"></i>
        <span className="tooltip-text">Just promt already</span>
            {extended ? <p>Settings</p>: null}
        </div>
           
            
      </div>
    </div>
  );
}
