import type { NextPage } from "next"
import Popper from "@popperjs/core"
import Link from "next/link"
import Head from "next/head"
import Testimonials from "../components/sections/homepage/Testimonials"
import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
// React-Bootstrap icons
import { Spotify } from "react-bootstrap-icons"

// React-Bootstrap imports
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import FAQ from "../components/FAQ"
import data from "../mockdata/allfaq.json"

import Hero from "../components/sections/pollination-mentee/Hero"
import ExpectCards from "../components/sections/pollination-mentee/ExpectCards"

const PollinationForMentees: NextPage = () => {
  let faqs = data.menteeFaq
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
     
      <FAQ data={faqs} title="Frequently Asked Questions"/>

        <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={false}>
          <div>
            <div className="hexagon">
              <img src="/images/testVanessa.png" alt="placeholder" />
            </div>
            <div className="myCarousel">
              <h3>Yatwan Hui</h3>
              <h4>Mentee</h4>
              <p>
                I loved the Beela Pollination Programme&apos;s focus on immigrant women in Sweden
                transitioning into tech. This was a clear thread in all of the workshops so that
                even well-trodden topics like CV writing were much more tailored to our specific
                needs. It&apos;s also exciting to see the programme grow, adapt and experiment with
                new ideas such as getting involved in real-life projects to practice our new skills.
              </p>
            </div>
          </div>

          <div>
            <div className="hexagon">
              <img src="/images/testIvy.png" alt="placeholder" />
            </div>
            <div className="myCarousel">
              <h3>Francisca Alliende </h3>
              <h4>Beela Mentee then Mentor - Data Analyst</h4>
              <p>
                When I arrived in Stockholm, I was new to Sweden and looking for a tech job for the
                first time, I felt insecure, lost and unmotivated, until I joined the Beela
                mentorship program as a mentee, which helped me better understand the Swedish job
                market and feel accompanied in this process and soon after that I found a job! Now I
                am a mentor in Beela and I want to continue participating as much as I can in this
                wonderful network.{" "}
              </p>
            </div>
          </div>
        </Carousel>

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
  )
}

export default PollinationForMentees
