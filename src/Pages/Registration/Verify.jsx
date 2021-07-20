import React from "react";
import "./Verify.css";

import Navbars from "../../Components/Navbars/Navbars";
import BottomNavbars from "../../Components/BottomNavbars/BottomNavbars";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";

// importing json data for images
import RegistrationVerifyImages from "../../JsonData/RegistrationVerifyImages";

function createRegistrationVerifyImageEntry({ id, verify, Imagelink, Title }) {
  return (
    <ImageGallery key={id} verify={true} Imagelink={Imagelink} Title={Title} />
  );
}

function Verify() {
  return (
    <> 
      <div className="verifyMainBody pt-5 mt-5">
        <div className=" container">
          <div className="verifyBody">
            <div className="container d-flex justify-content-center">
              <div className="objectiveHeading">
                <img
                  className="d-flex mx-auto"
                  src="https://lunchclub.com/static/media/logo2.4c4b75fd.svg"
                  alt=""
                />
                <br /> 
                <p className="text-center heading">
                  <strong>
                    <h4>How it works</h4>
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

              {RegistrationVerifyImages.map(createRegistrationVerifyImageEntry)}

              {/* --------------------------------------------------------------------------------------- */}
              <div className="buttons">
                <button className="verifyButtons nextButton" type="submit">
                  <strong>Get Started</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Verify;
