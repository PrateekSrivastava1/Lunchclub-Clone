import React from "react";
import "./MostConnectedPeople.css";
function MostConnectedPeople({Profile, Name, Score}) {
  return (
    <div className="MostConnectedPeopleBody">
      <div className="profileInfo"> 
        <img
          className="connectedPeopleImage"
          src={Profile}
          alt=""
        />
        <p className="info mt-3">{Name}</p>
      </div> 
      <p className="mt-3 peopleScore">{Score}</p> 
    </div> 
  );
}

export default MostConnectedPeople;
