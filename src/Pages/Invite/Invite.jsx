import { React, useState } from "react";
import "./Invite.css";

// React Bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col";

// components
import Navbars from "../../Components/Navbars/Navbars";
import BottomNavbars from "../../Components/BottomNavbars/BottomNavbars";
import InviteMessageTextBox from "../../Components/InviteMessageTextBox/InviteMessageTextBox";
import InstagramShareLinkBox from "../../Components/SocialmediaShareLinkBox/Instagram/InstagramShareLinkBox";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faLinkedin, } from "@fortawesome/free-brands-svg-icons";


function Invite() {
  const [link, setLink] = useState(
    "Excited to be networking on @lunchclubai! Use my invite link to skip the waitlist and meet interesting people: https://lunchclub.com/?invite_code=prateeks23&ref=twitter"
  );
  const changeLink = () => {
    setLink(
      "Excited to be networking on Lunchclub! Use my invite link to skip the waitlist and meet interesting people: https://lunchclub.com/?invite_code=prateeks23&ref=fb"
    );
    // console.log(link);
  };
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
                    value="Copy Invite Link"
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
                  <Col className="">
                    <FontAwesomeIcon
                      className="m-2 fa-lg text-primary"
                      icon={faFacebook}
                      onClick={changeLink}
                    />

                    <FontAwesomeIcon
                      className="m-2 fa-lg text-primary"
                      icon={faTwitter}
                      onClick={(e) => {
                        setLink(
                          "Excited to be networking on @lunchclubai! Use my invite link to skip the waitlist and meet interesting people: https://lunchclub.com/?invite_code=prateeks23&ref=twitter"
                        ); 
                      }} 
                    /> 
                    <FontAwesomeIcon
                      className="m-2 fa-lg text-primary"
                      icon={faLinkedin}
                      onClick={(e) => {
                        setLink(
                          "Excited to be networking on Lunchclub! Use my invite link to skip the waitlist and meet interesting people: https://lunchclub.com/?invite_code=prateeks23&ref=linkedin"
                        );
                      }}
                    />
                  </Col>
                  <InstagramShareLinkBox Link={link} />
                  <input
                    className="p-2 mb-3 shareButton "
                    type="button"
                    value="Share on Facebook"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <BottomNavbars/>
      </div>
    </>
  );
}

export default Invite;
