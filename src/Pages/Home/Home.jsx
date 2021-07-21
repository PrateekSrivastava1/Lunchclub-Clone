import React from "react";
import "./Home.css";
import Navbars from "../../Components/Navbars/Navbars";
import MetWith from "../../Components/MetWith/MetWith";
import BottomNavbars from "../../Components/BottomNavbars/BottomNavbars";

// json data
import MetWithData from "../../JsonData/MetWithData";


function createMetWithPeopleEntry({
  id,
  firstPersonDP,
  firstPersonName,
  secondPersonName,
  time,
  secondPersonDP,
  aboutSecondPerson,
}) {
  return (
    <MetWith
      key={id}
      firstPersonDP={firstPersonDP}
      firstPersonName={firstPersonName}
      secondPersonName={secondPersonName} 
      time={time}
      secondPersonDP={secondPersonDP}
      aboutSecondPerson={aboutSecondPerson}
    />
  );
}

function Home() {
  return (
    <div>
      <Navbars />
      <div className="HomeMainBody mt-4 pt-5">
        <div className=" container-fluid">
          <div className="container scrollBody mb-3">
            {MetWithData.map(createMetWithPeopleEntry)}
          </div>
        </div>
      </div>
      <BottomNavbars/> 
    </div>
  );
}

export default Home;
