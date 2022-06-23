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
import NavDropdown from "react-bootstrap/NavDropdown"

const NavBar = () => {
  const router = useRouter() // to set active links
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Link href="/">
            <a>
              <img src="/logoprimary.png" alt="placeholder" id="navbar-logo" />
            </a>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justif-items-center" id="basic-navbar-nav">
            <Container>
              <Nav>
                <div className="nav-links">
                  <Nav.Link href="/" className={router.asPath == "/" ? "active" : ""}>
                    Home
                  </Nav.Link>

                  <NavDropdown title="Programmes" id="basic-nav-dropdown" href="/programmes">
                        <NavDropdown.Item href="/pollination-for-mentees">Polination for Mentees</NavDropdown.Item>
                        <NavDropdown.Item href="/pollination-for-mentor">Beela Programees</NavDropdown.Item>
                   </NavDropdown>

               
            
                  <Nav.Link href="/stay-conected" className={router.asPath == "/programmes" ? "active" : ""}>
                   Stay Connected
                  </Nav.Link>
                  <Nav.Link href="/about" className={router.asPath == "/about" ? "active" : ""}>
                    About
                  </Nav.Link>
                </div>
              </Nav>
            </Container>
          </Navbar.Collapse>
          <div className="nav-socials">
            <Navbar.Text>
              <Link href="https://www.instagram.com/beela.se/">
                <a target="_blank">
                  <Instagram size={24} className="social-icons" />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/company/beela-se/">
                <a target="_blank">
                  <Linkedin size={24} className="social-icons" />
                </a>
              </Link>
              <Link href="https://open.spotify.com/show/1B1xgKaplQwslW05BoRDmX?si=aa23a69ce1174786">
                <a target="_blank">
                  <Spotify size={24} className="social-icons" />
                </a>
              </Link>
            </Navbar.Text>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
