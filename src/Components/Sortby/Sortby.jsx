import React from "react";
import "./Sortby.css";
function Sortby() {
  return (
    <div className="sortbyBody"> 
      <form action=""> 
        <label for="cars" className="heading sortLabel">Sort by:</label>
        <select name="cars" id="cars" className="sortDropdownBody"> 
          <option value="volvo" className="info">Network Score</option>
          <option value="saab" className="info">Weekly Streaks</option> 
          <option value="opel" className="info">Meetings</option>
        </select>
      </form>
    </div>
  );
}

export default Sortby;
