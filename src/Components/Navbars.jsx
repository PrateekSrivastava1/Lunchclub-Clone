import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../Components/Navbars.css";

// ----------------------------Material UI icons---------------------------
import HomeIcon from "@material-ui/icons/Home";
import EventIcon from "@material-ui/icons/Event";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PeopleIcon from "@material-ui/icons/People";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
// -------------------------------------------------------------------------

import {
  Form,
  FormControl,
  Nav,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
function Navbars() {
  return (
    <div className="container-fluid fixed-top navBar">
      <Navbar collapseOnSelect expand="lg">
        <div className="brandSpace">
          <Navbar.Brand href="#home">
            <img
              width="150"
              src="https://lunchclub.com/static/media/logo2.4c4b75fd.svg"
              alt=""
            />
          </Navbar.Brand>
        </div>
        <div className="iconSpace d-sm-block d-lg-none text-left">
          <Nav.Link href="#memes" className="pl-2 iconBorder ">
            <ChatBubbleIcon />
          </Nav.Link>
        </div>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search Lunchclub"
            className="mr-2 d-none d-lg-block d-sm-none"
            aria-label="Search"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </Form>
        <div className="ms-auto  hideNav d-none d-lg-block d-sm-none">
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="hideNav ">
              <Nav className="ms-auto ">
                <div className="iconSpace ">
                  <Nav.Link
                    href="#features"
                    className="p-2 iconBorder d-sm-none d-md-block"
                  >
                    <HomeIcon />
                  </Nav.Link>
                </div>
                <div className="iconSpace  ">
                  <Nav.Link
                    href="#pricing"
                    className="pl-2 iconBorder d-sm-none d-md-block"
                  >
                    <EventIcon />
                  </Nav.Link>
                </div>
                <div className="iconSpace ">
                  <Nav.Link
                    href="#deets"
                    className="pl-2 iconBorder d-sm-none d-md-block"
                  >
                    <MailOutlineIcon />
                  </Nav.Link>
                </div>
                <div className="iconSpace ">
                  <Nav.Link
                    href="#memes"
                    className="pl-2 iconBorder d-sm-none d-md-block"
                  >
                    <PeopleIcon />
                  </Nav.Link>
                </div>
                <div className="iconSpace ">
                  <Nav.Link
                    href="#memes"
                    className="pl-2 iconBorder d-none d-sm-block d-lg-block"
                  >
                    <ChatBubbleIcon />
                  </Nav.Link>
                </div>
              </Nav>
            </div>
            <div className="profileIconSpace">
              <div className="btn-group">
                <div className="btn-group dropstart" role="group">
                  <button
                    type="button"
                    className="btn btn-light dropdown-toggle  profileIconBorder"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="https://lunchclub.com/static/media/default-picture.90b9161a.svg" alt="" />
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