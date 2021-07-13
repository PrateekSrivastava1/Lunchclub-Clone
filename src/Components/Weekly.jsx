import React from "react";
import "./Weekly.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbars from "./Navbars";
import Tooltip from "./Tooltip";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import DropdownTopicsMenu from "./DropdownTopicsMenu";
import { useState } from "react";
import Popup from "./Popup";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "react-bootstrap";
function Weekly() {
  const [selected, setSelected] = useState(""); //for dropdown menu

  const [buttonPopup, setButtonPopup] = useState(false); // for popup

  const [check, setCheckbox] = useState(false); // for checkbox
  return (
    <>
      <div className="body">
        <div className=" container-fluid">
          <Navbars />
          <Tooltip
            image="https://lunchclub.com/static/media/clippy.f759b687.svg"
            strong="Welcome to Lunchclub!"
            ptag="Sign up for your first match this
          week."
          />
          <div className="container w-75 h-100 pt-5 mt-5  calender ">
            <h4 className=" d-flex justify-content-center">
              Schedule your matches
            </h4>
            <div>
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
                <Row className="container pt-5 pb-5 ">
                  <DropdownTopicsMenu
                    selected={selected}
                    setSelected={setSelected}
                  />
                </Row>
                <div className="container pb-5 ">
                  <input
                    class="btn btn-primary"
                    type="submit"
                    value="Pass for a week"
                    onClick={() => setButtonPopup(true)}
                  />
                  <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h4>You're invited to Lunch!</h4>
                    <p className="info">
                      We're running an exclusive beta for select Lunchclub
                      members in San Francisco Bay this week. Sign up for a 1:1
                      in-person meeting!
                    </p>
                    <img
                      src="https://lunchclub.com/static/media/in-person.3473786f.svg"
                      alt=""
                    />
                    <p>
                      <img
                        src="https://lunchclub.com/static/media/location-irl.c9f27c9c.svg"
                        alt=""
                      />
                      <strong className="info"> SoMa, San Francisco Bay</strong>
                    </p>
                    <p>
                      <img
                        src="https://lunchclub.com/static/media/calendar-irl.0f799e30.svg"
                        alt=""
                      />
                      <strong className="info"> Friday, July 16th, 12pm</strong>
                    </p>
                    <p className="info">
                      <input
                        type="checkbox"
                        onClick={() => setCheckbox(!check)}
                      />
                      I am fully vaccinated and understand that this meeting is
                      in person.
                    </p>

                    {/* I'm in button will be disabled if checkbox will not be checked 
                      checking checkbox is checked or not using ternary operator
                    */}
                    
                    {check ? (
                      <Button variant="primary" size="lg" className="w-25">
                        I'm In!
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        size="lg"
                        className="w-25"
                        disabled
                      >
                        I'm In!
                      </Button>
                    )}
                    <br />
                    <br />
                    <Button variant="primary" size="lg">
                      Not this week
                    </Button>
                  </Popup>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weekly;
