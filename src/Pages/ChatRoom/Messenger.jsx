import React from "react";
import Navbars from "../../Components/Navbars/Navbars";
import BottomNavbars from "../../Components/BottomNavbars/BottomNavbars";
import "./Messenger.css";
import Conversation from "../../Components/Conversations/Conversation";
import Message from "../../Components/Messages/Message";
import ChatOnline from "../../Components/ChatOnline/ChatOnline";

// importing data from JsonData folder
import MessageData from "../../JsonData/MessageData";
import ConversationData from "../../JsonData/ConversationData";

// passing all objects of MessageData array to Message component
function createMessagesEntry({ id, own, DP, text, time }) {
  return <Message key={id} own={own} DP={DP} text={text} time={time} />;
}

// passing all objects of conversationData array to Conversation component
function createConversationEntry({ id, Name, DP }) {
  return <Conversation key={id} Name={Name} DP={DP} />;
}

function Messenger() {
  return (
    <>
      <Navbars />
      <div className="messengerBody ">
        <div className=" messengerContainer">
          <div className="messenger ">
            <div className="chatMenu"> 
              <div className="chatMenuWrapper">
                <input
                  placeholder="Search for friend"
                  type="text"
                  className="chatMenuInput"
                />

                {/* Here we are using mapping technique so that we can avoid writing code again and again. */}

                {ConversationData.map(createConversationEntry)}
              </div>
            </div>
            <div className="chatBox">
              <div className="chatBoxWrapper">
                <div className="online">
                  <ChatOnline
                    Name={"Prateek"}
                    DP={
                      "https://img.icons8.com/offices/30/000000/user-male-skin-type-5.png"
                    }
                  />
                </div>
                <div className="chatBoxTop">
                  {/* Here we are using mapping technique so that we can avoid writing code again and again. */}

                  {MessageData.map(createMessagesEntry)}
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
