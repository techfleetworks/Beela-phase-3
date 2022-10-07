import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"

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
              <img src="/images/logoprimary.png" alt="Beela Logo" id="navbar-logo" />
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

                  {/*DROPDOWN SECTION*/}
                  <NavDropdown title="Programmes" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/programmes">Programmes</NavDropdown.Item>
                    <NavDropdown.Item href="/programmes">Beela Programees</NavDropdown.Item>
                    <NavDropdown.Item href="/pollination-for-mentees">Polination for Mentees</NavDropdown.Item>
                    <NavDropdown.Item href="/pollination-for-mentors">Polination for Mentors</NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link href="/stay-conected"className={router.asPath == "/programmes" ? "active" : ""}>Stay Connected</Nav.Link>
                  <Nav.Link href="/about" className={router.asPath == "/about" ? "active" : ""}>About Us</Nav.Link>
                  <Link href="/donation" className={router.asPath == "/donation" ? "active" : ""}>
                    <button className="donate-button">Donate</button>
                  </Link>
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
