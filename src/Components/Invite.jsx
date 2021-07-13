import React from "react";
import Navbars from "./Navbars";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Invite.css";
function Invite() {
  return (
    <div>
      <Navbars />
      <div className=" pt-5 mt-5 inviteBody">
        <Container className="  ">
          <div className="invitationBlockInfo "> 
            <Row className=" container ">
              <Col className="d-flex justify-content-center content">
                <div className="p-5">
                  <h4>Build the Lunchclub community!</h4>
                  <p className="info">
                    Invite your friends, earn 5 Clubpoints when they sign up,
                    and earn 5 more when they take their first meeting.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Invite;
