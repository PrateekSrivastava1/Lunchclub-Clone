import React from "react";
import "./ChatOnline.css";
function ChatOnline(props) {
  return ( 
    <div className="div">
      <div className="chatonline">
        <img
          className="chatonlineImg"
          src={props.DP} 
          alt=""
        />
        <span className="chatonlineName"> {props.Name} </span>
      </div>
      <div className="chatonlineTime info">Met on Jun 25 2021</div>
    </div>
  );
} 

export default ChatOnline;
