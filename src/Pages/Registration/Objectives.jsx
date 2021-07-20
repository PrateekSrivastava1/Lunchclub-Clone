import React from "react";
import "./Objectives.css";
import { Link } from "react-router-dom";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";

// importing json data for images
import RegistrationObjectivesImages from "../../JsonData/RegistrationObjectivesImages";

function createRegistrationImageEntry({ id, Imagelink, Title }) {
  return <ImageGallery key={id} Imagelink={Imagelink} Title={Title} />;
}

function Objectives() {
  return (
    <>
      <div className="objectiveMainBody pt-5 mt-5">
        <div className=" container">
          <div className="objectiveBody">
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

          <div class="container w-75 mb-5 pb-5">
            <div class="row text-center text-lg-left mb-5 pb-5">
              {/* ---------------------------------------------------------------------------------------------- */}
              {/* using map to show images, and collecting data from RegistrationImages.js file */}

              {RegistrationObjectivesImages.map(createRegistrationImageEntry)}

              {/* --------------------------------------------------------------------------------------- */}
              <div className="buttons">
                <Link to="./Hello">
                  <button
                    className="objectivesButtons backButton"
                    type="submit"
                  >
                    <strong>Back</strong> 
                  </button>
                </Link>
                <Link to="./Verify"> 
                  <button
                    className="objectivesButtons nextButton"
                    type="submit" 
                  >
                    <strong>Next</strong>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Objectives;
