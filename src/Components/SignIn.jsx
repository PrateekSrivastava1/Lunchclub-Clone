import React from "react";
// import {Row, Col, Container} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Components/SignIn.css";
// import Col from "react-bootstrap";
import GoogleLogin from "react-google-login";
function SignIn() {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  

  return (
    <>
      <Container fluid>
        <Row>
          <Col
            lg={6}
            col={12}
            className="jumbotron d-flex justify-content-center column"
          >
            <div className="column_width p-2 text-left">
              <h1 className="leftHeading">Your network is waiting for you.</h1>
              <p>
                We facilitate casual conversations that lead to not-so-casual
                professional impact. Powered by AI.
              </p>
            </div>
            <div className="Google_oAuth">
              <GoogleLogin
                clientId= {process.env.REACT_APP_CLIENT_ID}
                buttonText="login"
                callbackURL="http://localhost:3000/weekly"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </Col>
          <Col lg={6} col={12} className="d-flex justify-content-center column">
            <div className="p-2 text-left column_width">
              <p>HOW IT WORKS</p>
              <h1>It's simple, really</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SignIn;
