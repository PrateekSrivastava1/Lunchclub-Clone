import React from "react";
import Navbars from "../../Components/Navbars/Navbars"
import "./Messenger.css";
import Conversation from "../../Components/Conversations/Conversation";
import Message from "../../Components/Messages/Message";
import ChatOnline from "../../Components/ChatOnline/ChatOnline";
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
                <Conversation
                  Name={"Prateek"}
                  DP={
                    "https://img.icons8.com/offices/30/000000/user-male-skin-type-5.png"
                  }
                />
                <Conversation
                  Name={"Nitin"}
                  DP={
                    "https://img.icons8.com/color/48/000000/user-male-skin-type-5.png"
                  }
                />
                <Conversation
                  Name={"Pranjal"}
                  DP={
                    "https://img.icons8.com/dusk/64/000000/user-male-skin-type-5.png"
                  }
                />
                <Conversation
                  Name={"Shashwat"}
                 
                  DP={
                    "https://img.icons8.com/doodle/48/000000/user-male-skin-type-5.png"
                  }
                /> 
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
                  <Message
                    DP={
                      "https://img.icons8.com/offices/30/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    own={true}
                    DP={
                      "https://img.icons8.com/dusk/64/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    DP={
                      "https://img.icons8.com/offices/30/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    own={true}
                    DP={
                      "https://img.icons8.com/dusk/64/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    DP={
                      "https://img.icons8.com/offices/30/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    own={true}
                    DP={
                      "https://img.icons8.com/dusk/64/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    DP={
                      "https://img.icons8.com/offices/30/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    own={true}
                    DP={
                      "https://img.icons8.com/dusk/64/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    DP={
                      "https://img.icons8.com/offices/30/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    own={true}
                    DP={
                      "https://img.icons8.com/dusk/64/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    DP={
                      "https://img.icons8.com/offices/30/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    own={true}
                    DP={
                      "https://img.icons8.com/dusk/64/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    DP={
                      "https://img.icons8.com/offices/30/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    own={true}
                    DP={
                      "https://img.icons8.com/dusk/64/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    DP={
                      "https://img.icons8.com/offices/30/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    own={true}
                    DP={
                      "https://img.icons8.com/dusk/64/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    DP={
                      "https://img.icons8.com/offices/30/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    own={true}
                    DP={
                      "https://img.icons8.com/dusk/64/000000/user-male-skin-type-5.png"
                    }
                  />
                  <Message
                    DP={
                      "https://img.icons8.com/offices/30/000000/user-male-skin-type-5.png"
                    }
                  />
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
