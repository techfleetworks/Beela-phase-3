import type { NextPage } from "next"
import Popper from "@popperjs/core"
import Link from "next/link"
import Head from "next/head"
import Navbar from "../components/layout/Navbar"
import Testimonials from "../components/sections/homepage/Testimonials"
import { Hero } from "../components/sections/Hero"
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
import BeelasTalkPodcast from "../components/sections/homepage/BeelasTalkPodcast"

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

        {/* Our Team */}
        {/*
          <div className="container text-center" id="team-container">
            <div className="col align-items-center border p-5">
              <div className="d-flex flex-column">
                <div className="p-1">
                  <h2 id="our-team-title">Meet Our Team</h2>
                </div>
                <div className="p-1">
                  <p id="header-text">
                    We know from firsthand experience how hard it is to start over in a new country.
                    All of us are here to support you.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="card-deck d-flex flex-row flex-wrap justify-content-center">
                  {teamData &&
                    teamData.map((data) => (
                      <TeamCard
                        key={data.id}
                        imgSource={data.imgSource}
                        name={data.name}
                        title={data.title}
                        description={data.description}
                      />
                    ))}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="card-title">
                  <div>
                    <img src="images/zoe.png" alt="placeholder" />
                  </div>
                  <span id="team-name">Zoe Xuan Qin</span>
                  <p className="text-muted" id="team-title">
                    Marketing & Ops<br></br>Coordinator
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card-title">
                  <div>
                    <img src="images/anja.png" alt="placeholder" />
                  </div>
                  <span id="team-name">Anja Woracek</span>
                  <p className="text-muted" id="team-title">
                    Pollination Programme<br></br>Manager
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card-title">
                  <div>
                    <img src="images/estefanny.png" alt="placeholder" />
                  </div>
                  <span id="team-name">Estefanny Moran</span>
                  <p className="text-muted" id="team-title">
                    Graphic Designer
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card-title">
                  <div>
                    <img src="images/raquel.png" alt="placeholder" />
                  </div>
                  <span id="team-name">Raquel Almeida</span>
                  <p className="text-muted" id="team-title">
                    Volunteer
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="card-title">
                  <div>
                    <img src="images/milena.png" alt="placeholder" />
                  </div>
                  <span id="team-name">Milena Matrone</span>
                  <p className="text-muted" id="team-title">
                    Video & Podcast<br></br>
                    Producer
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card-title">
                  <div>
                    <img src="images/marcela.png" alt="placeholder" />
                  </div>
                  <span id="team-name">Marcela Feliz Fortiz</span>
                  <p className="text-muted" id="team-title">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card-title">
                  <div>
                    <img src="images/mae.png" alt="placeholder" />
                  </div>
                  <span id="team-name">Mae Tadena</span>
                  <p className="text-muted" id="team-title">
                    Social Media Manager
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card-title">
                  <div>
                    <img src="images/nidhi.png" alt="placeholder" />
                  </div>
                  <span id="team-name">Nidhi Pathak</span>
                  <p className="text-muted" id="team-title">
                    Volunteer
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-6 col-lg-3">
                <div className="card-title">
                  <div>
                    <img src="images/bee1.png" alt="placeholder" />
                  </div>
                  <span id="team-name">Rebecca</span>
                  <p className="text-muted" id="team-title">
                    Volunteer
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card-title">
                  <div>
                    <img src="images/bee1.png" alt="placeholder" />
                  </div>
                  <span id="team-name">Hellen</span>
                  <p className="text-muted" id="team-title">
                    Volunteer
                  </p>
                </div>
              </div>
            </div>
          </div>
                    */}

        {/* Blaze Award*/}

        {/* Pollination Programme */}
        <section id="section-pollination">
          <Row className="text-center justify-content-center align-content-center" id="pollination">
            <Container className="home-pollination__spacer">
              <Row className="home-pollination__title">
                <h2>Pollination Mentoring Programme</h2>
              </Row>
              <Row xs={1} md={2} className="m-4 align-items-center justify-content-center">
                <Col sm={10} md={8} lg={6} xl={5} className="p-3">
                  <div className="image-wrapper">
                    <img
                      src="/images/home-pollination.jpg"
                      alt="Three women speak to a crowd during a workshop for Beela."
                      className="img-fluid home-shadow_img"
                    />
                  </div>
                </Col>
                <Col sm={10} md={8} lg={6} xl={5} className="p-5">
                  <p className="m-0 B2">
                    Our free programme connects mentors with mentees based on interests and
                    availability. It offers 1-on-1 mentorship, along with networking events and
                    career workshops.
                  </p>
                </Col>
              </Row>

              <Container className="container justify-content-center" id="container-hex">
                <Row
                  className="xs={1} md={2} align-items-center justify-content-center display-flex flex-wrap"
                  id="card-deck-steps-hex"
                >
                  <Col className="card m-5 justify-content-center " id="card-m5-steps-hex">
                    <Card>
                      <Card.Body className="card-body-hex">
                        <p className="card-text">July 01 2022</p>
                        <p className="card-title">
                          <span className="small  card-span">Applications Open</span>
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="card m-5 justify-content-center" id="card-m5-steps-hex">
                    <Card>
                      <Card.Body className="card-body-hex">
                        <p className="card-text">July 24 2022</p>
                        <p className="card-title">
                          <span className="small card-span">Applications Close</span>
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="card m-5 justify-content-center " id="card-m5-steps-hex">
                    <Card>
                      <Card.Body className="card-body-hex">
                        <p className="card-text">Aug 14 2022</p>
                        <p className="card-title">
                          <span className="small card-span">Decisions sent</span>
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="card m-5 justify-content-center" id="card-m5-steps-hex">
                    <Card className="card-body-hex">
                      <Card.Body className="card-body-hex">
                        <p className="card-text">Aug 25 2022</p>
                        <p className="card-title">
                          <span className="small card-span">Kickoff</span>
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>

              <Row
                xs={1}
                md={2}
                className=" align-items-top justify-content-center display-flex flex-wrap"
              >
                <Col xs={8} sm={5} lg={4} className="p-4">
                  <h4 className="text-color__berry">Become a Mentee</h4>
                  <p className="B2">
                    Whether you’re exploring a tech field or applying to jobs, a mentor can help you
                    with your individualized needs.
                  </p>
                  <div>
                    <Link href="/pollination">
                      <a>
                        <button type="button" className="btn button-outline B2">
                          Learn More
                        </button>
                      </a>
                    </Link>
                  </div>
                </Col>
                <Col xs={8} sm={5} lg={4} className="p-4 display-flex">
                  <h4 className="text-color__berry">Become a Mentor</h4>
                  <p className="B2">
                    Share your experiences and make a difference in a mentee’s career. Continue to
                    learn through mentoring.
                  </p>
                  <div>
                    <Link href="/pollination">
                      <a>
                        <button type="button" className="btn button-outline B2">
                          Learn More
                        </button>
                      </a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </Row>
        </section>

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
