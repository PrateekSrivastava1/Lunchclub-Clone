import React from "react";
import "./Connection.css";
import Navbars from "../../Components/Navbars/Navbars";
import BottomNavbars from "../../Components/BottomNavbars/BottomNavbars";
import Streaks from "../../Components/ConnectionDashboardUpperJumbotron/Streaks";
import Sortby from "../../Components/Sortby/Sortby";
import ConnectionAnalysis from "../../Components/ConnectionDashboardAnalysis/ConnectionAnalysis";
import MostConnectedPeople from "../../Components/MostConnectedPeople/MostConnectedPeople";
import PastMatches from "../../Components/PastMatches/PastMatches";

// importing data from JsonData folder
import MostConnnectedPeopleData from "../../JsonData/MostConnnectedPeopleData";
import PastMatchesData from "../../JsonData/PastMatchesData";

// passing all objects of MostConnnectedPeopleData array to MostConnectedPeople component
function createConnectedPeopleEntry({ id, Name, Score, Profile }) {
  return (
    <MostConnectedPeople key={id} Name={Name} Score={Score} Profile={Profile} />
  );
}

// passing all objects of PastMatchesData array to PastMatches component
function createPastMatchesEntry({ id, Name, Time, About }) {
  return <PastMatches key={id} Name={Name} Time={Time} About={About} />;
}

function Connection() {
  return (
    <>
      <Navbars />
      <div className="connectionMainBody pt-5">
        <div className=" container-fluid">
          <h4 className="connectionHeading heading">Connection stats</h4>
          <div className="connectionBody ">
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
                {/* Here we are using mapping technique so that we can avoid writing code again and again. */}
                {MostConnnectedPeopleData.map(createConnectedPeopleEntry)}
              </div>
            </div>
          </div>
          <h4 className="connectionHeading heading">Past matches</h4>
          {/* Here we are using mapping technique so that we can avoid writing code again and again. */}

          {PastMatchesData.map(createPastMatchesEntry)}
        </div>
      </div>
      <BottomNavbars />
    </>
  );
}

export default Connection;
