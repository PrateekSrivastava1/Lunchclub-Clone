import React from "react";
import "./Hello.css";
import { Link } from "react-router-dom";
import Navbars from "../../Components/Navbars/Navbars";
import BottomNavbars from "../../Components/BottomNavbars/BottomNavbars";
function Hello() {
  return (
    <>
      <div className="helloMainBody pt-5 mt-5">
        <div className=" container-fluid">
          <div className="helloBody">
            <div className="container ">
              <div className="helloLogo"> 
                <img
                  src="https://lunchclub.com/static/media/logo2.4c4b75fd.svg"
                  alt=""
                />
              </div>
              <img
                className="helloImg"
                src="https://lunchclub.com/static/media/cities-graphic.e00b93ed.svg"
                alt=""
              />
              <div className="inputs">
                <input
                  className="helloInputText info"
                  placeholder="Your First Name"
                  type="text"
                />
                <br />
                <input
                  className="helloInputText info"
                  placeholder="Your Name"
                  type="text"
                />
                <br />
                <Link to="./Objectives">
                  <button className="helloSubmitButton" type="submit">
                    <strong>Let's get Started</strong>
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

export default Hello;
