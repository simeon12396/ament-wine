import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
import AmantLogo from "../assets/images/works/amant-logo.png";
import useActiveLink from "../hooks/useActiveLink";
import useScroll from "../hooks/useScroll";

export const NavigationBar = () => {
  const navClass = useScroll();

  const { activeLink, handleLinkClick } = useActiveLink(
    ".navbar-nav li.active"
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav
      className={
        "navbar navbar-expand-lg fixed-top navbar-custom tarnsperant-sticky " +
        navClass
      }
      id="navbar"
    >
      <Container>
        <Link className="navbar-brand logo" to="">
          <img src={AmantLogo} className="logo-light" alt="" height="130" />
          <img src={AmantLogo} className="logo-dark" alt="" height="100" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          <i className="mdi mdi-menu"></i>
        </button>
        <Navbar.Collapse id="navbarSupportedContent" in={isOpen}>
          <ul className="navbar-nav ms-auto navbar-center">
            <li
              className={`nav-item ${activeLink === "/home" ? "active" : ""}}`}
            >
              <Nav.Link href="#home" onClick={() => handleLinkClick("/home")}>
                Начало
              </Nav.Link>
            </li>
            <li
              className={`nav-item ${activeLink === "/about" ? "active" : ""}`}
            >
              <Nav.Link href="#about" onClick={() => handleLinkClick("/about")}>
                За нас
              </Nav.Link>
            </li>
            <li
              className={`nav-item ${activeLink === "/work" ? "active" : ""}`}
            >
              <Nav.Link href="#work" onClick={() => handleLinkClick("/work")}>
                Вина
              </Nav.Link>
            </li>
            <li
              className={`nav-item ${
                activeLink === "/contact" ? "active" : ""
              }`}
            >
              <Nav.Link
                href="#contact"
                onClick={() => handleLinkClick("/contact")}
              >
                Контакти
              </Nav.Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </nav>
  );
};
