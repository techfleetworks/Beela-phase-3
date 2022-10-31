import type { NextPage } from "next"
import Popper from "@popperjs/core"
import Link from "next/link"
import Head from "next/head"
import Testimonials from "../components/sections/homepage/Testimonials"
import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
// React-Bootstrap icons


// React-Bootstrap imports
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"

import FAQ from "../components/FAQ";
import data from "../mockdata/allfaq.json"
import Hero from "../components/sections/pollination-mentor/Hero"
import ExpectCards from "../components/sections/pollination-mentor/ExpectCards"

const PollinationForMentors: NextPage = () => {
  let faqs = data.mentorFaq
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
      <FAQ data={faqs} title="Frequently Asked Questions"/>


      {/* Hero */}
      {/*<div className="container-fluid overflow-hidden" id="wrapper">
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
        </Container>*/}

        <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={false}>
          <div>
            <div className="hexagon">
              <img src="/images/testVanessa.png" alt="placeholder" />
            </div>
            <div className="myCarousel">
              <h3>Yi Li</h3>
              <h4>Beela Mentor - UX Designer</h4>
              <p>
                I like how we help each other and grow together in Beela. The journey has brought me
                new reflections, inspirations, and many motivations.
              </p>
            </div>
          </div>

          <div>
            <div className="hexagon">
              <img src="/images/testIvy.png" alt="placeholder" />
            </div>
            <div className="myCarousel">
              <h3>Akzharkyn Duisembiyeva </h3>
              <h4>Beela Mentor - Security Engineer</h4>
              <p>
                Beela programme gave me a chance to get to know so many people that are willing to
                support each other. As a mentor I have met truly inspiring, smart and brave people
                who are finding their way to Swedish tech field. While mentee can learn from my
                technical experience, I can also talk to people from various backgrounds and improve
                my own skills and knowledge.
              </p>
            </div>
          </div>

          <div>
            <div className="hexagon">
              <img src="/images/testIvy.png" alt="placeholder" />
            </div>
            <div className="myCarousel">
              <h3>Rachael Ahn </h3>
              <h4>Beela Mentor - Data Scientist</h4>
              <p>
                Beela&apos;s mentorship program allowed me to connect with other immigrant women in
                Sweden and prompt meaningful discussions about data, adjusting to a new culture,
                self-assurance in applying for jobs, and more. Highly recommend others entering the
                tech industry to join the Beela community and especially the mentorship program to
                grow your network.{" "}
              </p>
            </div>
          </div>
        </Carousel>

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
  )
}

export default PollinationForMentors
