import React from "react";
import "./MostConnectedPeople.css";
function MostConnectedPeople(props) {
  return (
    <div className="MostConnectedPeopleBody">
      <div className="profileInfo"> 
        <img
          className="connectedPeopleImage"
          src={props.Profile}
          alt=""
        />
        <p className="info mt-3">{props.Name}</p>
      </div> 
      <p className="mt-3 peopleScore">{props.Score}</p> 
    </div> 
  );
}

export default MostConnectedPeople;
