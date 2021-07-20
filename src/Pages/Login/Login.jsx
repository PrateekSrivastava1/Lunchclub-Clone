import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="loginMainBody mt-5">
        <div className=" container-fluid">
          <div className="loginBody">
            <div className="container ">
              <div className="loginLogo">
                <img
                  src="https://lunchclub.com/static/media/logo2.4c4b75fd.svg"
                  alt=""
                />
              </div>
              <h1 className="heading text-center">Log in</h1>

              <img
                className="loginImg"
                src="https://lunchclub.com/static/media/cities-graphic.e00b93ed.svg"
                alt=""
              />
              <div className="inputs">
                <button className=" googleLoginInputText" type="submit">
                  <strong>
                      <img src="https://lunchclub.com/static/media/google.b1154755.svg" alt="" />
                      Continue with Google</strong>
                </button>
                <br />
                <input
                  className="loginInputText info"
                  placeholder="Email"
                  type="text" 
                />
                <br />
                <Link to="./Weekly">
                  <button className="loginSubmitButton" type="submit">
                    <strong>Send me a login link</strong>
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

export default Login;
