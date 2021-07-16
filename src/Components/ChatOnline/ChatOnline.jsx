import React from "react";
import "./ChatOnline.css";
function ChatOnline({DP, Name}) {
  return ( 
    <div >
      <div className="chatonline">
        <img
          className="chatonlineImg"
          src={DP} 
          alt=""
        />
        <span className="chatonlineName"> {Name} </span>
      </div>
      <div className="chatonlineTime info">Met on Jun 25 2021</div>
    </div>
  );
} 

export default ChatOnline;
