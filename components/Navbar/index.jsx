import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"

// Styles
import styles from "./Navbar.module.scss"

// React-Bootstrap Components
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"

const NavBar = () => {
  const router = useRouter() // to set active links
  return (
    <>
      <Navbar className={styles.navbar} fixed="top">
        <Container>
          <Link href="/">
            <a>
              <img src="/images/logoprimary.png" className={styles.logoWrapper} alt="Beela" />
            </a>
          </Link>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justif-items-center" id="basic-navbar-nav">
            <Container>
              <Nav>
                <div className={styles.navlinks}>
                  <button className={styles.link}>
                    <Nav.Link href="/" className={router.asPath == "/" ? "active" : ""}>
                    Home
                    </Nav.Link>
                  </button>

                  {/*DROPDOWN SECTION*/}
                  <button className={styles.link}>
                    <NavDropdown title="Programmes">
                      <NavDropdown.Item href="/programmes">Programmes</NavDropdown.Item>
                      <NavDropdown.Item href="/programmes">Beela Programees</NavDropdown.Item>
                      <NavDropdown.Item href="/pollination-for-mentees">Polination for Mentees</NavDropdown.Item>
                      <NavDropdown.Item href="/pollination-for-mentors">Polination for Mentors</NavDropdown.Item>
                    </NavDropdown>
                  </button>
                  
                  <button className={styles.link}>
                    <Nav.Link href="/stay-conected"className={router.asPath == "/programmes" ? "active" : ""}>Stay Connected
                    </Nav.Link>
                  </button>

                  <button className={styles.link}>
                    <Nav.Link href="/about" className={router.asPath == "/about" ? "active" : ""}>About Us
                    </Nav.Link>
                  </button>
                  
                  <Link href="/donate" className={router.asPath == "/donate" ? "active" : ""}>
                    <button className={styles.donate_button}>Donate</button>
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
