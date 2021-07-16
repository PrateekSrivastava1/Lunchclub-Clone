import React from "react";
import "./Streaks.css";
function Streaks(props) {
  return (
    <>
      <div className="streaksBody">
        <div className="streaksContent">
          <div>
            <img src={props.Image} alt="" />
            <span>
              {(props.boolMeeting && <strong>{props.Meetings}</strong>) ||
                (props.boolStreak && <strong>{props.Streak}</strong>) ||
                (props.boolClubpoint && <strong>{props.Clubpoints}</strong>)}
              {/*if boolMeeting props is true then we will show Meeting score*/}
              {/*if boolStreak props is true then we will show Streak score */}
              {/* if boolClubpoint props is true then we will show Clubpoints score */}
            </span>
          </div>
          <div className="statusTitle">
            {(props.boolMeeting && (
              <div className="info">Total meetings</div>
            )) ||
              (props.boolStreak && <div className="info">Week streak</div>) ||
              (props.boolClubpoint && <div className="info">Clubpoints</div>)} 
            {/*if boolMeeting props is true then we will show meetings statusTitle*/}
            {/*if boolStreak props is true then we will show Streak statusTitle */}
            {/* if boolClubpoint props is true then we will show Clubpoints statusTitle */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Streaks;
