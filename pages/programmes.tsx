import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import Hero from "../components/sections/programmes/Hero"
import PollinationMentoringProgramme from "../components/sections/programmes/PollinationMentoringProgramme"

const Programmes: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Programmes - Beela</title>
        <meta
          name="description"
          content="Our welcoming community helps women and non-binary Swedish immigrants break into tech."
        />
      </Head>
      <Hero />

      {/* Pollination Programme */}
      {/* <section id="section-pollination">
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
              <Col sm={10} md={8} lg={6} xl={5} className="p-5  text-start">
                <h4 className="no_name_37 text-start">How can we help you grow?</h4>
                <p className="m-0">
                  Unsure about expectations for switching careers in Sweden? Or eager to share your
                  experience?Our free programme offers 1-on-1 mentorship, along with events and
                  workshops to help mentees get into tech.
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
                <p>
                  Whether you’re exploring a tech field or applying to jobs, a mentor can help you
                  with your individualized needs.
                </p>
                <div>
                  <Link href="/pollination">
                    <a>
                      <button type="button" className="btn button-outline">
                        Learn More
                      </button>
                    </a>
                  </Link>
                </div>
              </Col>
              <Col xs={8} sm={5} lg={4} className="p-4 display-flex">
                <h4 className="text-color__berry">Become a Mentor</h4>
                <p>
                  Share your experiences and make a difference in a mentee’s career. Continue to
                  learn through mentoring.
                </p>
                <div>
                  <Link href="/pollination">
                    <a>
                      <button type="button" className="btn button-outline">
                        Learn More
                      </button>
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
      </section> */}

      {/* We are growing with you */}
      {/* <div>
        <Row id="wearegrowing">
          <Col className="  justify-content-center text-center">
            <Image src="/images/avatar.png" alt="About Beela" width={500} height={340} />
            <h2 className="no_name_37">We are growing with you</h2>
            <div className="container" id="growing-p">
              <p className="B1">
                Responding to the needs of our community is important to us. We are working hard to
                build programmes to best fit your needs.
              </p>
            </div>
            <h4 className="no_name_37 ">Apprenticeship Programme</h4>
            <div className="d-flex justify-content-center text-center">
              <p className="B1 " id="growing-apprentice">
                Beela is in the process of partnering with companies to provide the opportunity to
                work on real-world projects. Stay tuned for updates on Slack.
              </p>
            </div>
          </Col>
        </Row>
      </div> */}
    </div>
  )
}
export default Programmes
