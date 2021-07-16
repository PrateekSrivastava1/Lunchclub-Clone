import React from "react";
import "./PastMatches.css";
import InviteMessageTextBox from "../../Components/InviteMessageTextBox/InviteMessageTextBox";
function PastMatches({ Name, Time, About }) 
{
  return (
    <div>
      <div className="PastMatchesBody ">
        <div className="PastMatchesProfile">
          <img
            className="chatonlineImg"
            src="https://img.icons8.com/offices/30/000000/user-male-skin-type-5.png"
            alt=""
          /> 
          <span className="PastMatchesName"> {Name} </span>
        </div>
        <div className="PastMatchesTime info">{Time}</div>
        <div className="about info">{About}</div>
        <div className="privateNoteBox mt-1">
          <InviteMessageTextBox PastMatches={true} />
        </div>
      </div>
    </div>
  );
}

export default PastMatches;
