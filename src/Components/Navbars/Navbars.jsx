import React from "react";
import "./Navbars.css";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Form, FormControl, Nav } from "react-bootstrap";

// ----------------------------Material UI icons---------------------------
import HomeIcon from "@material-ui/icons/Home";
import EventIcon from "@material-ui/icons/Event";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PeopleIcon from "@material-ui/icons/People";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import SearchIcon from "@material-ui/icons/Search";
import AllOutIcon from '@material-ui/icons/AllOut';
import SettingsIcon from '@material-ui/icons/Settings';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
// -------------------------------------------------------------------------
import profileView from "../viewProfile/profileView";

function Navbars() {
  return (
    <div className="container-fluid fixed-top navBar">
      <Navbar collapseOnSelect expand="lg">
       
        {/*company logo */}
        <div className="brandSpace">
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                className="navImage"
                width="150"
                src="https://lunchclub.com/static/media/logo2.4c4b75fd.svg"
                alt=""
              />
            </Navbar.Brand>
          </LinkContainer>
        </div>

        {/* nav icons for smaller screens */}
        <div className="smallScreenNav">
          <div className="iconSpace smallScreenNavBody">
            <LinkContainer to="../Messenger">
              <Nav.Link className=" iconBorder navMsg">
                <ChatBubbleIcon />
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="../">
              <Nav.Link className=" iconBorder navMsg">
                <SearchIcon />
              </Nav.Link>
            </LinkContainer>
          </div>
        </div>

        {/* search box */}
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search Lunchclub"
            className="mr-2 d-none d-lg-block d-sm-none"
            aria-label="Search"
          />
        </Form>

        {/* navbar leftside icons */}
        <div className="ms-auto  hideNav ">
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="hideNav ">
              <Nav className="ms-auto ">

                <div className="iconSpace ">
                  <LinkContainer to="/">
                    <Nav.Link className="p-2 iconBorder ">
                      <HomeIcon />
                    </Nav.Link>
                  </LinkContainer>
                </div>

                <div className="iconSpace  ">
                  <LinkContainer to="../Weekly">
                    <Nav.Link className="pl-2 iconBorder">
                      <EventIcon />
                    </Nav.Link>
                  </LinkContainer>
                </div>

                <div className="iconSpace ">
                  <LinkContainer to="../Invite">
                    <Nav.Link className="pl-2 iconBorder ">
                      <MailOutlineIcon />
                    </Nav.Link>
                  </LinkContainer>
                </div>

                <div className="iconSpace ">
                  <LinkContainer to="../Connection">
                    <Nav.Link className="pl-2 iconBorder ">
                      <PeopleIcon />
                    </Nav.Link>
                  </LinkContainer>
                </div>

                <div className="iconSpace ">
                  <LinkContainer to="../Messenger">
                    <Nav.Link className="pl-2 iconBorder d-none d-sm-block d-lg-block">
                      <ChatBubbleIcon />
                    </Nav.Link>
                  </LinkContainer>
                </div>

              </Nav>
            </div>

            {/* profile dropdown menu */}
            <div className="profileIconSpace">
              <div className="btn-group">
                <div className="btn-group dropstart " role="group">
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
                  <ul className="dropdown-menu ">
                    
                    {/* profile info */}
                    <li>
                      <div className="profileViewBody">
                        <img src="https://img.icons8.com/dusk/64/000000/user-male-skin-type-5.png" alt="profile"  />
                        <p className="heading">
                          Prateek Srivastava 
                          <strong className="underlineEffects">
                            See breakdown
                          </strong>
                        </p>
                        <span className="scoreIcon"><AllOutIcon/></span>
                      </div>
                    </li> 
                    
                    {/* profileView component is now working */}
                    {/* <li><profileView/></li>  */}
                    <li className="options heading"> <span > <SettingsIcon/> </span> Setting </li> 
                    <li className="options heading"> <span > <FeedbackOutlinedIcon/> </span> Give feedback </li>
                    <li className="options heading"> <span > <HelpOutlineOutlinedIcon/> </span> FAQ </li>
                    <li className="options heading"> <span > <ExitToAppOutlinedIcon/> </span> Log out </li>
                  </ul>
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Navbars;
