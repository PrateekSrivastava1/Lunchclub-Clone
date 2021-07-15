import React from "react";
import "./Message.css";
function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://lunchclub.com/static/media/default-picture.90b9161a.svg"
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
