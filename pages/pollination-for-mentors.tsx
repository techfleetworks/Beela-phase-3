import type { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"

import Container from "react-bootstrap/Container"
import Accordion from "react-bootstrap/Accordion"

import data from "../mockdata/pollination.json"

import Hero from "../components/sections/pollination-mentor/Hero"
import ExpectCards from "../components/sections/pollination-mentor/ExpectCards"
import PollinationCarousel from "../components/elements/PollinationCarousel"

const PollinationForMentors: NextPage = () => {
  let testimonials = data.mentor.testimonials

  return (
    <div>
      <Head>
        <title>Become a Mentor - Beela</title>
        <meta
          name="description"
          content="Our welcoming community helps women and non-binary Swedish immigrants break into tech."
        />
      </Head>
      <Hero />
      <ExpectCards />
      <PollinationCarousel color="SECONDARY_CORNFLOWER" data={testimonials} />

      {/* Hero */}
      <div className="container-fluid overflow-hidden" id="wrapper">
        <Container fluid className="py-5" style={{ backgroundColor: "#F9F2D4" }}>
          <Container>
            <h3 className="no_name_37 text-center">Frequently Asked Questions</h3>
            <Accordion defaultActiveKey="0" className="my-5">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="mb-0">
                  What background do I need to be a mentor?
                </Accordion.Header>

                <Accordion.Body className="B1">
                  We ask that you have successfully landed your first tech job in Sweden. Whether
                  you’re in your first tech job or 10th, we believe everyone can offer a valuable
                  perspective.{" "}
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header className="mb-0">
                  <span className="mb-0 no_name_37"> What are you looking for in mentors?</span>
                </Accordion.Header>
                <Accordion.Body className="B1">
                  We are looking for mentors who are eager to share their experiences, encouraging,
                  and knowledgeable about the tech scene in Sweden.{" "}
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header className="mb-0 no_name_37">
                  <span className="mb-0 no_name_37">
                    Are the mentor meetings in person or virtual?
                  </span>
                </Accordion.Header>
                <Accordion.Body className="B1">
                  Most of the mentor sessions are virtual. However, if mentors and mentees live in
                  the same city and feel comfortable meeting up, we encourage that.{" "}
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header className="mb-0 no_name_37">
                  <span className="mb-0 no_name_37">Will I be paid for mentoring?</span>
                </Accordion.Header>
                <Accordion.Body className="B1">
                  No. The Pollination Mentoring Programme is free for mentees. This programme is a
                  valuable opportunity to enhance your leadership and communication skills within a
                  supportive community.{" "}
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

        <Container
          style={{
            minHeight: "160px",
            alignItems: "center",
            marginTop: "3rem",
            textAlign: "center",
            padding: "4rem 0rem",
            backgroundColor: "#F9F2D4",
          }}
        >
          <h2 className="no_name_37 text-center " style={{ color: "#623762" }}>
            Beela has a community for you
          </h2>
          <p>
            Ask questions, network, and stay up-to-date about upcoming events. We’re an inclusive
            bunch and we’d love to have you! Our Slack community has special channels just for
            mentors to connect, network, or take a fika with other Beela members.
          </p>
          <Link href="https://beela.slack.com/join/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ#/shared-invite/email">
            <a target="_blank">
              <button type="button" className="btn  button slack-btn">
                Join Slack
              </button>
            </a>
          </Link>
        </Container>
      </div>
    </div>
  )
}

export default PollinationForMentors
