import React from "react";
import "./Message.css";
function Message({ own, DP  }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={DP}
          alt=""
        /> 
        <p className="messageText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          ea? 
        </p> 
      </div>
      <div className="messageBottom info">25 minutes ago</div>
    </div>
  );
} 

export default Message;
