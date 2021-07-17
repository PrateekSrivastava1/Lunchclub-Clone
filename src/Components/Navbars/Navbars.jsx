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
// -------------------------------------------------------------------------

function Navbars() {
  return (
    <div className="container-fluid fixed-top navBar">
      <Navbar collapseOnSelect expand="lg">
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

        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search Lunchclub"
            className="mr-2 d-none d-lg-block d-sm-none"
            aria-label="Search"
          />
        </Form>
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
                  <ul className="dropdown-menu">
                    <li>Profile</li>
                    <li>Link1</li>
                    <li>Link2</li>
                    <li>Link3</li>
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
