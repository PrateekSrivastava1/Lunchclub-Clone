import React from "react";
import "./Objectives.css";
import Navbars from "../../Components/Navbars/Navbars";
import BottomNavbars from "../../Components/BottomNavbars/BottomNavbars";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";

// importing json data for images
import RegistrationImages from "../../JsonData/RegistrationImages";


function createRegistrationImageEntry({ id, Imagelink, Title }) {
  return <ImageGallery key={id} Imagelink={Imagelink} Title={Title} />;
}

function Objectives() {

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

          <div class="container w-75 mb-5 pb-5">
            <div class="row text-center text-lg-left mb-5 pb-5">

              {/* ---------------------------------------------------------------------------------------------- */}
              {/* using map to show images, and collecting data from RegistrationImages.js file */}

              {RegistrationImages.map(createRegistrationImageEntry)}

              {/* --------------------------------------------------------------------------------------- */}
              <div className="buttons">
                <button className="objectivesButtons backButton" type="submit"><strong>Back</strong></button>
                <button className="objectivesButtons nextButton" type="submit"><strong>Next</strong></button>
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
