import React from "react";
import Navbars from "../../Components/Navbars/Navbars";
import Streaks from "../../Components/ConnectionDashboardUpperJumbotron/Streaks";
import "./Connection.css";
import ConnectionAnalysis from "../../Components/ConnectionDashboardAnalysis/ConnectionAnalysis";
function Connection() {
  return (
    <div>
      <Navbars />
      <div className="body pt-5">
        <div className=" container-fluid ">
          <Navbars />
          <div className="mt-5 connectionBody">
            <div className="container ">
              <div className="row container containerRow">
                <div className="col-lg-3 col-sm-3 mb-2">
                  <img
                    className="connectionImage"
                    src="https://lunchclub.com/static/media/default-picture.90b9161a.svg"
                    alt=""
                  />
                  <span>
                    <strong>Prateek Pandey</strong>
                  </span>
                </div>
                <div className="col-lg-3 col-sm-9 mb-2">
                  <Streaks
                    Image={
                      "https://lunchclub.com/static/media/meetings.573b7a69.svg"
                    }
                    Meetings={0}
                    boolMeeting={true}
                  />
                </div>
                <div className="col-lg-3 col-sm-9 mb-2">
                  <Streaks
                    Image={
                      "https://lunchclub.com/static/media/streak.0608f40a.svg"
                    }
                    Streak={0}
                    boolStreak={true}
                  />
                </div>
                <div className="col-lg-3 col-sm-9 mb-2">
                  <Streaks
                    Image={
                      "https://lunchclub.com/static/media/clubpoints.7f6edf6b.svg"
                    }
                    Clubpoints={5}
                    boolClubpoint={true}
                  />
                </div>
              </div>
              <div className="container">
                <ConnectionAnalysis 
                networkScore={500}
                boolNetworkScore={true} 
                />
                <ConnectionAnalysis
                InspiredMeetings={0}
                boolInspiredMeetings={true}
                />
                <ConnectionAnalysis 
                SuperInvesters={true} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connection;
