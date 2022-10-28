import type { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"

// React-Bootstrap imports
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Accordion from "react-bootstrap/Accordion"

import data from "../mockdata/pollination.json"
import Hero from "../components/sections/pollination-mentee/Hero"
import ExpectCards from "../components/sections/pollination-mentee/ExpectCards"
import PollinationCarousel from "../components/elements/PollinationCarousel"

const PollinationForMentees: NextPage = () => {
  let testimonials = data.mentee.testimonials

  return (
    <div>
      <Head>
        <title>Become a Mentee - Beela</title>
        <meta
          name="description"
          content="Our welcoming community helps women and non-binary Swedish immigrants break into tech."
        />
      </Head>

      <Hero />
      <ExpectCards />
      <PollinationCarousel color="PRIMARY_CORAL" data={testimonials} />

      {/* Hero */}
      <div className="container-fluid overflow-hidden" id="wrapper">
        <Container fluid className="py-5" style={{ backgroundColor: "#F9F2D4" }}>
          <Container>
            <h3 className="no_name_37 text-center">Frequently Asked Questions</h3>
            <Accordion defaultActiveKey="0" className="my-5">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="mb-0">
                  What background do I need to apply for the programme?
                </Accordion.Header>

                <Accordion.Body className="B1">
                  We are open to applicants from a range of backgrounds. Diversity only helps
                  enhance the tech community! We&apos;ve had mentees in our programme who are
                  exploring tech careers, as well as those who are actively applying to jobs.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header className="mb-0">
                  <span className="mb-0 no_name_37"> What are you looking for in applicants?</span>
                </Accordion.Header>
                <Accordion.Body className="B1">
                  We are looking for applicants who are focused on self-development, curious, and
                  ready to make a mark on Sweden&apos;s tech scene!
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header className="mb-0 no_name_37">
                  <span className="mb-0 no_name_37"> What qualifications will my mentor have?</span>
                </Accordion.Header>
                <Accordion.Body className="B1">
                  We ask that mentors have successfully landed their first tech job in Sweden.
                  Whether they’re in their first tech job or 10th, we believe everyone can offer a
                  valuable perspective.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header className="mb-0 no_name_37">
                  <span className="mb-0 no_name_37">
                    {" "}
                    Are the mentor meetings in person or virtual?
                  </span>
                </Accordion.Header>
                <Accordion.Body className="B1">
                  Most of the mentor sessions are virtual. However, if mentors and mentees live in
                  the same city and feel comfortable meeting up, we encourage that.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header className="mb-0 no_name_37">
                  <span className="mb-0 no_name_37">
                    I still have questions. Who should I ask?{" "}
                  </span>
                </Accordion.Header>
                <Accordion.Body className="B1">Email us at contact@beela.se!</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </Container>

        <Container style={{ minHeight: "160px", alignItems: "center", marginTop: "3rem" }}>
          <h2 className="no_name_37 text-center " style={{ color: "#623762" }}>
            Beela has a community for you
          </h2>
          <h5 className=" text-center ">Find out how you can engage with Beela members</h5>
        </Container>

        {/* Podcast  */}
        <section id="section-podcast" className="pod-mente">
          <Row className="text-center justify-content-center align-content-center">
            <Container className="home-pollination__spacer">
              <Row xs={1} md={2} className="m-4 align-items-center justify-content-center">
                <Col
                  xs={{ order: 1 }}
                  sm={10}
                  md={{ span: 6, order: 2 }}
                  lg={6}
                  xl={5}
                  className="p-3"
                >
                  <div className="image-wrapper">
                    <img
                      src="/images/home-podcast.svg"
                      alt="The Podcast image for Beela Talk, an illustraion of two women in Rosie the Riveter pose with the text Beela's Talk underneath them"
                      className="img-fluid home-shadow_img"
                    />
                  </div>
                </Col>
                <Col xs={{ order: 2 }} sm={10} md={{ span: 6 }} lg={6} xl={5} className="p-2">
                  <h3 className="no_name_37" style={{ textAlign: "start" }}>
                    Podcast
                  </h3>
                  <p className="m-0 B1" style={{ maxWidth: "268px", textAlign: "start" }}>
                    Audio inspiration is a click away. Absorb unique insights around diversity,
                    equity, and inclusion in the tech industry.
                  </p>
                  <div className="pt-3 left-center-text">
                    <Link href="https://beela.slack.com/join/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ#/shared-invite/email">
                      <a target="_blank">
                        <button type="button" className="btn button-outline">
                          Listen to Beela&apos;s Talk
                        </button>
                      </a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </Row>
        </section>

        {/* Newsletter  */}
        <section id="section-podcast" className="new-mente">
          <Row className="text-center justify-content-center align-content-center">
            <Container className="home-pollination__spacer">
              <Row xs={1} md={2} className="m-4 align-items-center justify-content-center">
                <Col
                  xs={{ order: 1 }}
                  sm={10}
                  md={{ span: 6, order: 2 }}
                  lg={6}
                  xl={5}
                  className="p-3"
                >
                  <div className="image-wrapper">
                    <img
                      src="/images/home-podcast.svg"
                      alt="The Podcast image for Beela Talk, an illustraion of two women in Rosie the Riveter pose with the text Beela's Talk underneath them"
                      className="img-fluid home-shadow_img"
                    />
                  </div>
                </Col>
                <Col
                  xs={{ order: 2 }}
                  sm={10}
                  md={{ span: 6, order: 1 }}
                  lg={6}
                  xl={5}
                  className="p-2"
                >
                  <h3 className="no_name_37" style={{ textAlign: "start" }}>
                    Newsletter
                  </h3>
                  <p className="m-0 B1" style={{ maxWidth: "268px", textAlign: "start" }}>
                    Let’s stay connected. Subscribe to our newsletter to stay up-to-date on
                    resources and events.
                  </p>
                  <div className="pt-3 left-center-text">
                    <Link href="https://beela.slack.com/join/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ#/shared-invite/email">
                      <a target="_blank">
                        <button type="button" className="btn button-outline">
                          Sign up
                        </button>
                      </a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </Row>
        </section>

        {/* Slack */}
        <section id="section-podcast" className="pod-mente">
          <Row className="text-center justify-content-center align-content-center">
            <Container className="home-pollination__spacer">
              <Row xs={1} md={2} className="m-4 align-items-center justify-content-center">
                <Col
                  xs={{ order: 1 }}
                  sm={10}
                  md={{ span: 6, order: 2 }}
                  lg={6}
                  xl={5}
                  className="p-3"
                >
                  <div className="image-wrapper">
                    <img
                      src="/images/home-podcast.svg"
                      alt="The Podcast image for Beela Talk, an illustraion of two women in Rosie the Riveter pose with the text Beela's Talk underneath them"
                      className="img-fluid home-shadow_img"
                    />
                  </div>
                </Col>
                <Col xs={{ order: 2 }} sm={10} md={{ span: 6 }} lg={6} xl={5} className="p-2">
                  <h3 className="no_name_37" style={{ textAlign: "start" }}>
                    Slack
                  </h3>
                  <p className="m-0 B1" style={{ maxWidth: "268px", textAlign: "start" }}>
                    Ask questions, network, and stay up-to-date about upcoming events. We&apos;re an
                    inclusive bunch, and we&apos;d love to have you!
                  </p>
                  <div className="pt-3 left-center-text">
                    <Link href="https://beela.slack.com/join/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ#/shared-invite/email">
                      <a target="_blank">
                        <button type="button" className="btn button-outline">
                          Join Slack
                        </button>
                      </a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </Row>
        </section>
      </div>
    </div>
  )
}

export default PollinationForMentees
