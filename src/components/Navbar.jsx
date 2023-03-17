import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TuneIcon from "@mui/icons-material/Tune";
import {NavLink} from 'react-router-dom'
import logo from "../components/fav.png"

import "./navbar.css";

function NavBar() {
  return (
    <div className="parent">
      <div className="child-logo">
        <img src={logo} alt="" />
      </div>
      <div className="child-nav">
        <Navbar expand="lg" className="generalNavbar">
          <Container>
            <Navbar.Brand href="#home" className="navbar-brand">
              <div className="brand-logo">
                <img src={logo} alt="" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler">
              <TuneIcon />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/faculty">
                  Faculty
                </NavLink>
                <NavLink className="nav-link" to="/activity">
                  Activities
                </NavLink>

                <NavLink className="nav-link" to="/labs">
                  Labs
                </NavLink>
                <NavLink className="nav-link" to="/events">
                  Events
                </NavLink>
                <NavLink className="nav-link" to="/mg">
                  Management
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;
