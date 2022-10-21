import type { NextPage } from "next"
import Popper from "@popperjs/core"
import Link from "next/link"
import Head from "next/head"
import Navbar from "../components/layout/Navbar"
import Testimonials from "../components/sections/homepage/Testimonials"
import { Hero } from "../components/sections/homepage/Hero"
import { TeamCard } from "../components/elements/TeamCard"
// import avatar from "../public/avatar.png"
import { SectionWrapper } from "../components/layout/SectionWrapper"

// React-Bootstrap icons

// React-Bootstrap imports
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
//import { wrap } from "module"

// mock data
//import teamData from "../mockdata/team.json"

// import TestingComponent from "../components/elements/testingcomponent"
// import { useTestimonialsQuery } from "../graphql/generated"
// import { usePostsQuery } from "../graphql/generated"
// import { fieldNameFromStoreName } from "@apollo/client/cache"

import { PageWrapper } from "../components/layout/PageWrapper"
import Footer from "../components/layout/Footer/footer"

import BlazeAnnouncement from "../components/sections/homepage/BlazeAnnouncement"
import Career from "../components/sections/homepage/Career"
import PolinationProgramme from "../components/sections/homepage/PollinationProgramme"
import BeelasTalkPodcast from "../components/sections/homepage/BeelasTalkPodcast"
import PollinationProgramme from "../components/sections/homepage/PollinationProgramme"

const Home: NextPage = () => {
  // const { data, error, loading } = useTestimonialsQuery()

  // if (loading) return <main className={styles.main}>Loading...</main>
  // if (error) return <main className={styles.main}>{error.message}</main>

  // From here, { data } can be referenced
  return (
    <div>
      <Head>
        <title>Beela</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <PageWrapper>
        <Hero />
        <BlazeAnnouncement />
        <Career />
        <PollinationProgramme />

        {/* Testimonials */}
        <section id="section-testimonials">
          <Row
            className="text-center justify-content-center align-content-center"
            id="testimonials"
          >
            <Container className="align-items-center p-5">
              <Row className="justify-content-center">
                <Col sm={8}>
                  <div className="p-1">
                    <h2>They did it—and so can you</h2>
                  </div>
                  <div className="p-1">
                    <p id="header-text" className="B2">
                      We are proud of our podcast guests who have started their tech careers in
                      Sweden.
                    </p>
                  </div>
                </Col>
              </Row>
              <Testimonials />
            </Container>
          </Row>
        </section>

        <BeelasTalkPodcast />
      </PageWrapper>
      <Footer />
    </div>
  )
}

export default Home
