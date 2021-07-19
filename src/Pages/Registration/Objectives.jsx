import React from "react";
import "./Objectives.css";
import { Link } from "react-router-dom";
import Navbars from "../../Components/Navbars/Navbars";
import BottomNavbars from "../../Components/BottomNavbars/BottomNavbars";

// importing json data for images
import MetWithData from "../../JsonData/RegistrationImages";

function Objectives() {
  console.log(MetWithData.length);
  return (
    <>
      <Navbars />
      <div className="helloMainBody pt-5 mt-5">
        <div className=" container">
          <div className="helloBody">
            <div className="container d-flex justify-content-center">
              <div className="objectiveHeading">
                <h3 className="heading text-center">
                  What are your objectives?
                </h3>
                <br />
                <p className="info  text-center">
                  <strong>
                    Select up to 3 objectives. These will be kept private from
                    other users but help us find relevant matches.
                  </strong>
                </p>
              </div>
            </div>
          </div>

            {/* image gallery */}
          <div class="container">
            <div class="row text-center text-lg-left">
              <div class="col-lg-3 col-md-4 col-6">
                <a href="#" class="d-block mb-4 h-100">
                  <img
                    class="img-fluid img-thumbnail"
                    src=""
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNavbars />
    </>
  );
}

export default Objectives;
