import React from "react";
import Navbars from "./Navbars";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Invite.css";
import InviteMessageTextBox from "./InviteMessageTextBox";
import InstagramShareLinkBox from "./InstagramShareLinkBox";
function Invite() {
  return (
    <>
      <Navbars />
      <div className=" pt-5 mt-5 inviteBody">
        <Container>
          <div className="invitationBlockInfo  content ">
            <Row className=" container">
              <Col className="d-flex  justify-content-center ">
                <div className="colDiv">
                  <h3>Build the Lunchclub community!</h3>
                  <p className="info">
                    Invite your friends, earn 5 Clubpoints when they sign up,
                    and earn 5 more when they take their first meeting.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className=" container  ">
              <Col lg={6} sm={12}>
                <div className="inputRowBox">
                  <input
                    className="p-2 mb-3 inviteInput"
                    placeholder="Enter name or email"
                    type="text"
                  />
                </div>
              </Col>
              <Col lg={6} sm={12}>
                <div className="inputRowButton">
                  <input
                    className="p-2 mb-3 inviteInputButton"
                    type="button"
                    value="Send Invite"
                  />
                </div>
              </Col>
            </Row>
            <Row className=" container  ">
              <Col lg={6} sm={12}>
                <div className="inputRowBox">
                  <input
                    className="p-2 mb-3 inviteInput"
                    placeholder="https://lunchclub.com/?invite_code=userid"
                    type="text"
                  />
                </div>
              </Col>
              <Col lg={6} sm={12}>
                <div className="inputRowButton">
                  <input
                    className="p-2 mb-3 inviteInputButton"
                    type="button"
                    value="Send Invite"
                  />
                </div>
              </Col>
            </Row>
            <Row className=" container  pb-3">
              <InviteMessageTextBox />
            </Row>
          </div>
          <div className="invitationBlockInfo  content ">
            <Row className=" container">
              <Col className="d-flex  justify-content-center ">
                <div className="colDiv text-center">
                  <p>
                    <strong>Tell your friends about joining Lunchclub!</strong>
                  </p>
                  <p className="info">
                    Edit the text below and tweet about joining Lunchclub
                  </p>
                  <InstagramShareLinkBox/> 
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Invite;
