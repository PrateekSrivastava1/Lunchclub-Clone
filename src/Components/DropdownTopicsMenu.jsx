import React from "react";
import "./DropdownTopicsMenu.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useState } from "react";
function DropdownTopicsMenu(selected, setSelected) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "Artificial Intelligence", "Machine Learning", "Web Development", "Android", "Soft Computing", "Digital life",
  ];
  return (
    <div className="dropdownBody">
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          Choose your Topic 
          <span>{!isActive ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</span>
        </div>
        {isActive && (
          <div className="dropdown-content scrollable-menu">
            {options.map((option) => ( 
              <div
                className="dropdown-item" 
                onClick={(e) => {
                //   setSelected(option)
                  setIsActive(false) 
                }} 
              >
                {option}
              </div>
            ))}
          </div> 
        )}
      </div>
    </div>
  );
}

export default DropdownTopicsMenu;
