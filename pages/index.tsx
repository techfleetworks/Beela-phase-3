import type { NextPage } from "next"
import Popper from "@popperjs/core"

import Head from "next/head"

import Testimonials from "../components/sections/homepage/Testimonials"
import  Hero from "../components/sections/homepage/Hero/index"
import { TeamCard } from "../components/elements/TeamCard"

// React-Bootstrap icons

// React-Bootstrap imports
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

// import TestingComponent from "../components/elements/testingcomponent"
// import { useTestimonialsQuery } from "../graphql/generated"
// import { usePostsQuery } from "../graphql/generated"
// import { fieldNameFromStoreName } from "@apollo/client/cache"

import BlazeAnnouncement from "../components/sections/homepage/BlazeAnnouncement"
import Career from "../components/sections/homepage/Career"
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
        <title>Beela - empowering women in tech</title>
        <meta
          name="description"
          content="Our welcoming community helps women and non-binary Swedish immigrants break into tech."
        />
      </Head>

      <Hero />
      <BlazeAnnouncement />
      <Career />
      <PollinationProgramme />

      {/* Testimonials */}
      <section id="section-testimonials">
        <Row className="text-center justify-content-center align-content-center" id="testimonials">
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
    </div>
  )
}

export default Home
