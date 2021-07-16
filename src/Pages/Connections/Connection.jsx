import React from "react";
import "./Connection.css";
import Navbars from "../../Components/Navbars/Navbars";
import Streaks from "../../Components/ConnectionDashboardUpperJumbotron/Streaks";
import Sortby from "../../Components/Sortby/Sortby";
import ConnectionAnalysis from "../../Components/ConnectionDashboardAnalysis/ConnectionAnalysis";
import MostConnectedPeople from "../../Components/MostConnectedPeople/MostConnectedPeople";

function Connection() {
  return (
    <div >
      <Navbars />
      <div className="connectionMainBody pt-5">
        <div className=" container-fluid ">
          <Navbars />
          <h4 className="connectionHeading">Connection stats</h4>
          <div className="connectionBody heading">
            <div className="container ">
              <div className="row container containerRow">
                <div className="col-lg-3 col-sm-3 mb-2">
                  <img
                    className="connectionImage"
                    src="https://lunchclub.com/static/media/default-picture.90b9161a.svg"
                    alt=""
                  />
                  <span>
                    <strong className="heading">Prateek Pandey</strong>
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
              <div className="container analysisContainer">
                <ConnectionAnalysis
                  networkScore={500}
                  boolNetworkScore={true}
                />
                <ConnectionAnalysis
                  InspiredMeetings={0}
                  boolInspiredMeetings={true}
                />
                <ConnectionAnalysis SuperInvesters={true} />
                <h5 className="heading">Most connected in your network</h5>
              </div>
              <div className="container mt-2 ">
                  <Sortby />
                  <br /> <br /> 
                <MostConnectedPeople 
                Name={"Prateek"}
                Score={850}
                Profile={"https://lunchclub.com/static/media/default-picture.90b9161a.svg"}
                />
                <MostConnectedPeople 
                Name={"Pranjal"}
                Score={950}
                Profile={"https://img.icons8.com/dusk/64/000000/user-male-skin-type-5.png"}
                />
                <MostConnectedPeople 
                Name={"Nitin"}
                Score={1101}
                Profile={"https://img.icons8.com/offices/30/000000/user-male-skin-type-5.png"}
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