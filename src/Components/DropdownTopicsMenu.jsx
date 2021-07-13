import React from "react";
import "./DropdownTopicsMenu.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import SmsIcon from '@material-ui/icons/Sms';
import { useState } from "react";
function DropdownTopicsMenu(selected, setSelected) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "AI",
    "Angel investing",
    "Concerts",
    "Consulting",
    "Cooking",
    "Crypto",
    "Data science",
    "Dinner parties",
    "Diversity and inclusion",
    "E-commerce",
    "Education",
    "Entertainment",
    "Entrepreneurship",
    "Film",
    "Fintech",
    "Fitness",
    "Food",
    "Healthcare",
    "Hiking",
    "Machine learning",
    "Marketing",
    "Media",
    "Music",
    "Photography",
    "Product design",
    "Product management",
    "Programming languages",
    "Reading",
    "Running",
    "Sales",
    "Social impact",
    "Sports",
    "Sustainability",
    "Travel",
    "Venture capital",
    "Visual design",
    "Wellness",
    "Writing",
  ];
  return (
    <div className="dropdownBody pickers">
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
         What do you want to talk about?
          <span>{!isActive ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</span>
        </div>
        {isActive && (
          <div className="dropdown-content scrollable-menu">
            {options.map((option) => (
              <div
                className="dropdown-item"
                onClick={(e) => {
                  //   setSelected(option)
                  setIsActive(false);
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
