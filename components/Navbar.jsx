import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"

import { Instagram } from "react-bootstrap-icons"
import { Linkedin } from "react-bootstrap-icons"
import { Spotify } from "react-bootstrap-icons"

// React-Bootstrap Components
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

const NavBar = () => {
  const router = useRouter() // to set active links
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link href="/">
            <a>
              <img src="/logoprimary.png" alt="placeholder" id="navbar-logo" />
            </a>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justif-items-center" id="basic-navbar-nav">
            <Container>
              <Nav className="me-auto">
                <div className="nav-links">
                  <Nav.Link href="/" className={router.asPath == "/" ? "active" : ""}>
                    Home
                  </Nav.Link>
                  <Nav.Link href="/about" className={router.asPath == "/about" ? "active" : ""}>
                    About
                  </Nav.Link>
                  <Nav.Link
                    href="/pollination"
                    className={router.asPath == "/pollination" ? "active" : ""}
                  >
                    Pollination
                  </Nav.Link>
                </div>
                <div className="nav-socials">
                  <Navbar.Text>
                    <Instagram size={24} className="social-icons" />
                    <Linkedin size={24} className="social-icons" />
                    <Spotify size={24} className="social-icons" />
                  </Navbar.Text>
                </div>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
