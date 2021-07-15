import React from "react";
import Navbars from "../Navbars";
import "./Messenger.css";
import Conversation from "../Conversations/Conversation";
import Message from "../Messages/Message"; 
import ChatOnline from "../ChatOnline/ChatOnline";
function Messenger() { 
  return (
    <>
      <Navbars />
      <div className="messengerBody">
      <div className="container messengerContainer w-75 pt-3 mt-5"> 
        <div className="messenger ">
          <div className="chatMenu">
            <div className="chatMenuWrapper">
              <input
                placeholder="Search for friend"
                type="text"
                className="chatMenuInput"
              />
              <Conversation /> 
              <Conversation /> 
              <Conversation />
              <Conversation /> 
            </div>
          </div>
          <div className="chatBox">
            <div className="chatBoxWrapper">
              <div className="online">
              <ChatOnline /> 
              </div>
              <div className="chatBoxTop"> 
                <Message />
                <Message own={true} />
                <Message />
                <Message own={true} />
                <Message />
                <Message own={true} />
                <Message />
                <Message own={true} />
                <Message />
                <Message own={true} />
                <Message />
                <Message own={true} />
                <Message />
                <Message own={true} />
                <Message />
                <Message own={true} />
                <Message />
                <Message own={true} />
                <Message />
              </div>
              <div className="chatBoxButtom">
                <textarea
                  className="chatMessageInput"
                  placeholder="Type Something here..."
                ></textarea>
                <button className="chatSubmitButton">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Messenger;
