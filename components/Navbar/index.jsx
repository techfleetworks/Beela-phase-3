import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"

// Styles
import styles from "./Navbar.module.scss"

// Importing Components
import { Button } from "../elements/Button"

// React-Bootstrap Components
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"

const NavBar = () => {
  const router = useRouter(); // to set active links
  const routerResHome = router.asPath == "/" ? styles.active : "" ;

  // needs to be able to detect any of the links inside the dropdown. needs editing.
  const routerResStayContected = router.asPath == "/stay-conected" ? styles.active : "";
  const routerResAboutUs = router.asPath == "/about" ? styles.active : "";
  const routerResDonate = router.asPath == "/donate" ? styles.active : "";
  return (
    <>
      <Navbar className={styles.navbar} fixed="top" expand="xl"> 
      {/* // display: flex; 
       flex-wrap: inherit; 
       align-items: center; 
       justify-content: space-between; */}

      <Container>
          <Link href="/">
            <a className=""> 
              <img src="/images/logoprimary.png" className={styles.logoWrapper} alt="Beela" />
            </a>
          </Link>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justif-items-center" id="basic-navbar-nav">
            <Container>
              <Nav>
                <div className={styles.navlinks}>
                    <Link href="/" >
                      <a className={`${styles.link} ${routerResHome}`}>
                      Home
                      </a>
                    </Link>
                  {/*DROPDOWN SECTION*/}
                    <NavDropdown title="Programmes" className={styles.link}>
                      <NavDropdown.Item href="/programmes" className={styles.dropdownItem}>Programmes</NavDropdown.Item>
                      <NavDropdown.Item href="/pollination-for-mentees" className={styles.dropdownItem}>Polination for Mentees</NavDropdown.Item>
                      <NavDropdown.Item href="/pollination-for-mentors" className={styles.dropdownItem}>Polination for Mentors</NavDropdown.Item>
                    </NavDropdown>
                  
                    <Link href="/stay-conected">
                      <a className={`${styles.link} ${routerResStayContected}`}>Stay Connected</a>
                    </Link>
                  
                    <Link href="/about" >
                      <a className={`${routerResAboutUs} ${styles.link}`}> About Us</a>
                    </Link>

                <Button
                    href="/about"
                    variant="primary_darkBG"
                    title="Donate"
                />
                </div>

              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    </>
  )
}

export default NavBar;
