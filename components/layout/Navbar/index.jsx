import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"

// Styles
import styles from "./Navbar.module.scss"

// Importing Components
import { Button } from "../../elements/Button"

// React-Bootstrap Components
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"

const NavBar = () => {
  const router = useRouter() // to set active links
  const routerResHome = router.asPath == "/" ? styles.active : ""

  // needs to be able to detect any of the links inside the dropdown. needs editing.
  const routerResProgrammes = router.asPath == "/programmes" ? styles.active : ""
  const routerResStayContected = router.asPath == "/stay-conected" ? styles.active : ""
  const routerResAboutUs = router.asPath == "/about" ? styles.active : ""

  const [show, setShow] = useState(false)
  const showDropdown = (e) => {
    setShow(!show)
  }
  const hideDropdown = (e) => {
    setShow(false)
  }

  // let screenWidth = window.innerWidth
  return (
    <>
      <Navbar className={styles.navbar} fixed="top" expand="lg">
        <Container className={styles.container}>
          <Link href="/">
            <a className="">
              <img src="/icons/logo_primary.svg" className={styles.logoWrapper} alt="Beela" />
            </a>
          </Link>

          <Navbar.Toggle id="collapseMenu" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="" id="basic-navbar-nav">
            <Container className={styles.linkContainer}>
              <Nav className={styles.linkWrapper}>
                <div className={styles.navlinks}>
                  <Link href="/">
                    <a className={`${styles.link} ${routerResHome} h5`}>Home</a>
                  </Link>
                  {/*DROPDOWN SECTION*/}
                  <NavDropdown
                    href="/programmes"
                    show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                    onToggle={() => {
                      window.location.href = "/programmes"
                    }}
                    title="Programmes"
                    className={`${styles.link} h5 ${routerResProgrammes} ${styles.dropdownLink}`}
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item
                      href="/pollination-for-mentees"
                      className={`O1 ${styles.dropdownItem}`}
                    >
                      Become a Mentee
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/pollination-for-mentors"
                      className={`O1 ${styles.dropdownItem}`}
                    >
                      Become a Mentor
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Link href="/stay-conected">
                    <a className={`${styles.link} h5 ${routerResStayContected}`}>Stay Connected</a>
                  </Link>

                  <Link href="/about">
                    <a className={`${routerResAboutUs} h5 ${styles.link}`}> About Us</a>
                  </Link>
                </div>

                <Button href="/about" variant="primary_darkBG" title="Donate" />
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
