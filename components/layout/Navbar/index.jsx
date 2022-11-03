import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"

// React-Bootstrap Components
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"
import Dropdown from "react-bootstrap/Dropdown"
import NavItem from "react-bootstrap/NavItem"
import NavLink from "react-bootstrap/NavLink"

// Styles
import styles from "./Navbar.module.scss"

// Importing Components
import { Button } from "../../elements/Button"

const NavBar = () => {
  const router = useRouter() // to set active links
  const routerResHome = router.asPath == "/" ? styles.active : ""

  // needs to be able to detect any of the links inside the dropdown. needs editing.
  const routerResProgrammes = router.asPath == "/programmes" ? styles.active : ""
  const routerResMentees = router.asPath == "/pollination-for-mentees" ? styles.active : ""
  const routerResMentors = router.asPath == "/pollination-for-mentors" ? styles.active : ""
  const routerResStayContected = router.asPath == "/stay-connected" ? styles.active : ""
  const routerResAboutUs = router.asPath == "/about" ? styles.active : ""

  const [show, setShow] = useState(false)
  const showDropdown = (e) => {
    setShow(!show)
  }
  const hideDropdown = (e) => {
    setShow(false)
  }

  return (
    <>
      <Navbar className={styles.navbar} fixed="top" collapseOnSelect expand="lg">
        <Container className={styles.container}>
          <Navbar.Brand href="/" className="">
            <img
              src="/icons/logo_primary.svg"
              className={styles.logoWrapper}
              alt="Beela's logo - a drawing of a bee inside of a yellow hexagon shape with the name Beela written in a blue color"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Container className={styles.linkContainer}>
              <Nav className={styles.linkWrapper}>
                <div className={styles.navlinks}>
                  <Link href="/" eventKey="1" passHref>
                    <Nav.Link className={`${styles.link} ${routerResHome} h5 px-0`}>Home</Nav.Link>
                  </Link>

                  {/*DROPDOWN SECTION*/}
                  <Dropdown
                    as={NavItem}
                    show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                  >
                    <Link href="/programmes" passHref eventKey="2">
                      <Dropdown.Toggle
                        as={NavLink}
                        className={`${styles.link} h5 ${routerResProgrammes} ${styles.dropdownLink} px-0`}
                      >
                        Programmes
                      </Dropdown.Toggle>
                    </Link>
                    <Dropdown.Menu className={styles.dropdownMenu}>
                      <Link href="/pollination-for-mentees" passHref eventKey="2.1">
                        <Dropdown.Item
                          className={`O1 px-0 mx-4 my-2 ${routerResMentees} ${styles.dropdownItem} ${styles.link}`}
                        >
                          Become a Mentee
                        </Dropdown.Item>
                      </Link>
                      <Link href="/pollination-for-mentors" passHref eventKey="2.2">
                        <Dropdown.Item
                          className={`O1 px-0 mx-4 my-2 ${routerResMentors} ${styles.dropdownItem} ${styles.link}`}
                        >
                          Become a Mentor
                        </Dropdown.Item>
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Link href="/stay-connected" passHref eventKey="3">
                    <Nav.Link className={`h5 px-0 ${routerResStayContected} ${styles.link}`}>
                      Stay Connected
                    </Nav.Link>
                  </Link>

                  <Link href="/about" passHref eventKey="4">
                    <Nav.Link className={` h5 px-0 ${routerResAboutUs} ${styles.link}`}>
                      About Us
                    </Nav.Link>
                  </Link>
                </div>
                <Link href="/donate" passHref eventKey="5">
                  <Nav.Link className={`button ${routerResAboutUs} ${styles.donateButton}`}>
                    Donate
                  </Nav.Link>
                </Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
