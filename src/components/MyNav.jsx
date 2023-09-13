// import { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import logoNetflix from "../logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => {
  const location = useLocation();
  // console.log("location", location);
  return (
    <Navbar
      expand="lg"
      className="navbar-dark"
      style={{ paddingInline: "1rem" }}
    >
      <Container fluid>
        <Navbar.Brand to={"/"}>
          <img
            src={logoNetflix}
            style={{ width: "100px", height: "55px" }}
            alt="img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ textAlign: "center" }}>
            <Nav.Item>
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active fw-bold" : ""
                }`}
                to={"/"}
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className={`nav-link ${
                  location.pathname === "/tvshows" ? "active fw-bold" : ""
                }`}
                to={"/tvshows"}
              >
                TV Shows
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className={`nav-link ${
                  location.pathname === "/movies" ? "active fw-bold" : ""
                }`}
                to={"/movies"}
              >
                Movies
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className={`nav-link ${
                  location.pathname === "/recAdd" ? "active fw-bold" : ""
                }`}
                to={"/recAdd"}
              >
                Recently Added
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className={`nav-link ${
                  location.pathname === "/myList" ? "active fw-bold" : ""
                }`}
                to={"/myList"}
              >
                My List
              </Link>
            </Nav.Item>
          </Nav>
          <div
            id="kids"
            style={{ fontWeight: "bold", padding: "8px", textAlign: "center" }}
          >
            KIDS
          </div>
          <div
            id="tre-icone-navbar"
            className="d-flex"
            style={{ justifyContent: "flex-end" }}
          >
            <i className="fa fa-search icons"></i>
            <i className="fa fa-bell icons"></i>
            <i className="fa fa-user icons"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
