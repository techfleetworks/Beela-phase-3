import type { NextPage } from "next"
import Popper from "@popperjs/core"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import Navbar from "../components/sections/Navbar"
import Footer from "../components/layout/Footer"
import Testimonials from "../components/sections/Testimonials"

// React-Bootstrap icons
import { ArrowRight } from "react-bootstrap-icons"

// React-Bootstrap imports
import { Col, Row, Card, Container, ListGroup } from "react-bootstrap"
// import Row from "react-bootstrap/Row"
// import Card from "react-bootstrap/Card"
// import Container from "react-bootstrap/Container"

// import { usePostsQuery } from "../graphql/generated"
// import styles from "../styles/Home.module.css"

const Mentee: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Beela</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Row className="text-center align-content-center justify-content-center" id="Hero">
          <Row className="justify-content-center">
            <Col sm={10} md={8} lg={6} xl={5} className="mb-4 pt-4">
              <h2>Pollination for Mentees</h2>
              <h3>Next Cohort Starts: Autumn 2022</h3>
              <h4> Ready to get into tech?</h4>
              <p>Our free Pollination Mentoring Programme provides a space to grow and blossom.</p>
              <ListGroup as="ul"></ListGroup>
            </Col>
          </Row>
        </Row>
      </main>
    </div>
  )
}
export default Mentee
