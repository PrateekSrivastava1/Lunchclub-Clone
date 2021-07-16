import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SignIn.css";
import { Button } from "react-bootstrap";
import ImageShow from "../../Components/ImageShow/ImageShow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// import GoogleLogin from "react-google-login";
function SignIn() {
  // const responseGoogle = (response) => {
  //   console.log(response);
  //   console.log(response.profileObj);
  // };

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6} col={12} className="jumbotron d-flex column">
            <div className="column_width m-4 text-left">
              <div className="pb-5 mb-5">
                <img
                  src="https://lunchclub.com/static/media/logo2.4c4b75fd.svg"
                  alt=""
                />
              </div>
              <h1 className="leftHeading pb-4">
                Your network is waiting for you.
              </h1>
              <p className="pElement">
                We facilitate casual conversations that lead to not-so-casual
                professional impact. Powered by AI.
              </p>
              <div className="input_element text-center p-3">
                <div className="input-group googleLabel ">
                  <div className="input-group-prepend ">
                    <span
                      className="input-group-text border-primary bg-light"
                      id="basic-addon1"
                    >
                      <img
                        src="https://lunchclub.com/static/media/google.b1154755.svg"
                        alt="G"
                      />
                      .
                    </span>
                  </div>
                  
                  <input
                    type="button"
                    className="form-control  googleButton text-primary border-primary "
                    value="Sign Up with Google"
                    placeholder="Sign Up with Google"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <br /> <p className="pElement">OR</p>
                <div className="input-group"> 
                  <input
                    type="text"
                    className="form-control border-dark rounded-left"
                    placeholder="Enter your email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text bg-primary rounded-right text-light"
                      type="button"
                      id="basic-addon2"
                    >
                    <strong><Link className=" link text-light" to="../Weekly">Get Started</Link> </strong> 
                    </span>
                  </div>
                </div>
              </div>
              <small>
                Already have an account? <a href="">  Log in here.</a>
              </small>
            </div>
            {/* --------------------------------------------------------------- */}
            {/* there is a bug in google oauth, that is why I commented it for now. */}.
            {/* <div className="Google_oAuth">
              <GoogleLogin
                clientId= {process.env.REACT_APP_CLIENT_ID}
                buttonText="login"
                callbackURL="http://localhost:3000/weekly"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div> */}
            {/* --------------------------------------------------------------- */}
          </Col>
          <Col lg={6} col={12} className="d-flex justify-content-center column">
            <div className="p-2 right_column_width ">
              <div className="pb-3 mt-3 mb-5 d-flex justify-content-end">
                <Button
                  className="text-primary border-primary rounded bg-light"
                  variant="light"
                >
                  <Link className="text-primary link" to="../Weekly">Log In</Link>
                </Button>
              </div>
              <div className="text-center">
                <small>HOW IT WORKS</small>
                <h1>It's simple, really</h1>
                <div id="imageData" className="pt-5">
                  <ImageShow />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <Row className="d-flex text-center p-3 mb-3">
          <Col
            lg={4}
            col={4}
            sm={4}
            className=" "
          >
            <p className="text-primary d-flex justify-content-start m-2 pElement ">
                Careers
                <span>
                  <small> WE'RE HIRING</small>
                </span>
              </p>
          </Col>
          <Col lg={4} col={4} sm={4} className="">
            <FontAwesomeIcon
              className="m-2 fa-lg text-primary"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className="m-2 fa-lg text-primary"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="m-2 fa-lg text-primary"
              icon={faLinkedin}  
            />
          </Col>
          <Col lg={4} col={4} sm={4} className="d-flex justify-content-end">
            <img
              className="footerLogo m-2"
              src="https://lunchclub.com/static/media/logo-icon.bacfc46d.svg"
              alt=""
            />
          </Col> 
        </Row>
      </Container>
    </>
  );
}

export default SignIn;
