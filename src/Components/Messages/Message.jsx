import React from "react";
import "./Message.css";
function Message({ own, DP, text, time  }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={DP}
          alt="" 
        /> 
        <p className="messageText">
          {text} 
        </p> 
      </div>
      <div className="messageBottom info">{time}</div>
    </div>
  );
} 

export default Message;
