import React from "react";
import "./Weekly.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbars from "./Navbars";
import Tooltip from "./Tooltip";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
function Weekly() {
  return (
    <>
      <div className="body container-fluid">
        <Navbars />
        <Tooltip
          image="https://lunchclub.com/static/media/clippy.f759b687.svg"
          strong="Welcome to Lunchclub!"
          ptag="Sign up for your first match this
          week."
        />
        <div className="container w-75 h-75 pt-5 mt-5 calender ">
          <h4 className=" d-flex justify-content-center">
            Schedule your matches
          </h4>
          <div className="h-75">
            <Container>
              <Row className="container w-100 ">
                <Col
                  lg={6}
                  col={12}
                  sm={12}
                  className="d-flex justify-content-center pickers "
                >
                  <DatePicker />
                </Col>
                <Col
                  lg={6}
                  col={12}
                  sm={12}
                  className="d-flex justify-content-center pickers  h-75"
                >
                  <TimePicker />
                </Col>
              </Row>
              <Row className="container w-100 ">
                <Col lg={12} col={12} sm={12} className="pt-5 pickers">
                  <p className="info">
                    These are the best times for New York City (in EDT). Each
                    meeting is 45 minutes!
                  </p>
                  <br />
                  <p className="info">
                    These times are the best fit with your calendar.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Weekly;


