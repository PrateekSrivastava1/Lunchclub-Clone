import React from "react";
import "./MostConnectedPeople.css";
function MostConnectedPeople() {
  return (
    <div className="MostConnectedPeopleBody">
      <div className="profileInfo"> 
        <img
          className="connectedPeopleImage"
          src="https://lunchclub.com/static/media/default-picture.90b9161a.svg"
          alt=""
        />
        <p className="info mt-3">Name</p>
      </div> 
      <p className="mt-3 peopleScore">924</p> 
    </div> 
  );
}

export default MostConnectedPeople;
