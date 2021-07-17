import React from "react";
import "./BottomNavbars.css";

import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

// ----------------------------Material UI icons---------------------------
import HomeIcon from "@material-ui/icons/Home";
import EventIcon from "@material-ui/icons/Event";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PeopleIcon from "@material-ui/icons/People";
import AllOutIcon from '@material-ui/icons/AllOut';
import SettingsIcon from '@material-ui/icons/Settings';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
// -------------------------------------------------------------------------

function BottomNavbars() {
  return (
    <div className=" fixed-bottom BottomNavv navBar">
      <Navbar collapseOnSelect expand="lg">
        <div className="mx-auto">
          <Navbar id="responsive-navbar-nav">
            <div className=" ">
              <Nav className="">
                <div className="bottomNaviconSpace ">
                  <LinkContainer to="/">
                    <Nav.Link className=" iconBorder ">
                      <HomeIcon />
                    </Nav.Link>
                  </LinkContainer>
                </div>
                <div className="bottomNaviconSpace">
                  <LinkContainer to="../Weekly">
                    <Nav.Link className=" iconBorder">
                      <EventIcon />
                    </Nav.Link>
                  </LinkContainer>
                </div>
                <div className="bottomNaviconSpace ">
                  <LinkContainer to="../Invite">
                    <Nav.Link className=" iconBorder ">
                      <MailOutlineIcon />
                    </Nav.Link>
                  </LinkContainer>
                </div>
                <div className="bottomNaviconSpace ">
                  <LinkContainer to="../Connection">
                    <Nav.Link className=" iconBorder ">
                      <PeopleIcon />
                    </Nav.Link>
                  </LinkContainer>
                </div>
              </Nav>
            </div>
            <div className="profileIconSpace">
              <div className="btn-group">
                <div className="btn-group dropup " role="group">
                  <button
                    type="button"
                    className="btn btn-light dropdown-toggle  profileIconBorder"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="navImage"
                      src="https://lunchclub.com/static/media/default-picture.90b9161a.svg"
                      alt=""
                    />
                  </button>
                  {/* profile dropdown menu */}
                  <ul className="dropdown-menu ">
                    <li>
                      <div className="profileViewBody">
                        <img
                          src="https://img.icons8.com/dusk/64/000000/user-male-skin-type-5.png"
                          alt="profile"
                        />
                        <p className="heading">
                          Prateek Srivastava
                          <strong className="underlineEffects">
                            See breakdown
                          </strong>
                        </p>
                        <span className="scoreIcon">
                          <AllOutIcon />
                        </span>
                      </div>
                    </li>
                    {/* profileView component is now working */}
                    {/* <li><profileView/></li>  */}
                    <li className="options heading">
                      <span>
                        <SettingsIcon />
                      </span>
                      Setting
                    </li>
                    <li className="options heading">
                      <span>
                        <FeedbackOutlinedIcon />
                      </span>
                      Give feedback
                    </li>
                    <li className="options heading">
                      <span>
                        <HelpOutlineOutlinedIcon />
                      </span>
                      FAQ
                    </li>
                    <li className="options heading">
                      <span>
                        <ExitToAppOutlinedIcon />
                      </span>
                      Log out
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Navbar>
        </div>
      </Navbar>
    </div>
  );
}

export default BottomNavbars;
