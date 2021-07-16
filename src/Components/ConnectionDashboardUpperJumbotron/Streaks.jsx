import React from "react";
import "./Streaks.css";
function Streaks({Meetings, Streak, Clubpoints, boolMeeting, boolStreak, boolClubpoint, Image}) {
  return (
    <>
      <div className="streaksBody">
        <div className="streaksContent">
          <div>
            <img src={Image} alt="" />
            <span>
              {(boolMeeting && <strong>{Meetings}</strong>) ||
                (boolStreak && <strong>{Streak}</strong>) ||
                (boolClubpoint && <strong>{Clubpoints}</strong>)}
              {/*if boolMeeting props is true then we will show Meeting score*/}
              {/*if boolStreak props is true then we will show Streak score */}
              {/* if boolClubpoint props is true then we will show Clubpoints score */}
            </span>
          </div>
          <div className="statusTitle">
            {
              (boolMeeting && (<div className="info">Total meetings</div>)) ||
              (boolStreak && <div className="info">Week streak</div>) ||
              (boolClubpoint && <div className="info">Clubpoints</div>)
            } 
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
