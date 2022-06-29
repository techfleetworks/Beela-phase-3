import type { NextPage } from "next"
import Popper from "@popperjs/core"
import Link from "next/link"
import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Testimonials from "../components/Testimonials"
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
import Accordion from "react-bootstrap/Accordion"

const PollinationForMentors: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Beela</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />

        {/* Hero */}
        <div className="container-fluid overflow-hidden" id="wrapper">
          <div className="row p-5" id="jumbotron">
            {/* Hero */}
            <div className="container px-5" id="hero">
              {/* About Beela */}
              <div className="row" id="hero-container">
                <div className="col py-4 px-5 m-5">
                  <div className="conatiner">
                    <div className="container pb-4 pt-2">
                      <h1 className="no_name_37">Pollination For Mentors</h1>
                      <h3 className="no_name_37" >Next cohort starts: Autumn 2022</h3>
                    </div>
                    <div className="container">
                      <h4 >Ready to get into tech? </h4>
                      <p id="about-paragraph">
                        Our free Pollination Mentoring Programme provides a space to grow and blossom.
                      </p>
                      <p className="B1">
                        <ul>
                          <li>4 month programme</li>
                          <li>1-on-1 session with a mentor twice a month</li>
                          <li>Supportive community</li>
                          <li>3 hours/week time commitment</li>
                        </ul>
                        <Link href="https://docs.google.com/forms/d/1hT1ZjogGSzdND-QvlKj6jqj9ZDbfnQSQE6hWymcXA3I/prefill" ><a target="_blank"><button type="button" className="btn  button slack-btn">Start your application</button></a></Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-5 py-5 px-2 my-5 mx-2">
                  <Image src="mentee-main.png" alt="About Beela" width={500} height={340} />
                </div>
              </div>
            </div>
          </div>

          <Container className="py-5">
            <h2 className="text-center no_name_37 mb-5 py-5">What to expect as a mentor</h2>
            <Row className="mt-4">
              <Col md={6} lg={4} className="text-center">
                <Card style={{ width: '18rem', position: "relative", backgroundColor: '#E6C619' }}>
                  <Card.Img variant="top" src="mentee-avatar1.png" className="img-card-relative" />
                  <Card.Body className="py-5">
                   
                    <Card.Text>
                    Leverage your experience to help women and non-binary immigrants begin a tech career in Sweden.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} lg={4} className="text-center">
                <Card style={{ width: '18rem', backgroundColor: '#E6C619' }}>
                  <Card.Img variant="top" src="mentee-avatar2.png" className="img-card-relative" />
                  <Card.Body className="py-5">
                    
                    <Card.Text>
                    Mentees most often need help with CVs, interviews, and navigating the Swedish job market.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} lg={4} className="text-center">
                <Card style={{ width: '18rem', backgroundColor: '#E6C619' }}>

                  <Card.Img variant="top" src="mentee-avatar3.png" className="img-card-relative" />
                  <Card.Body className="py-5">
                    
                    <Card.Text>
                    Our mentorship community is here to support you, whether you’re a first-time mentor or very experienced.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
          </Container>

          <Container fluid className="py-5" style={{ backgroundColor: '#F9F2D4' }}>
            <Container>
              <h3 className="no_name_37 text-center">Frequently Asked Questions</h3>
              <Accordion defaultActiveKey="0" className="my-5">
                <Accordion.Item eventKey="0">

                  <Accordion.Header className="mb-0">
                  What background do I need to be a mentor?

                  </Accordion.Header>

                  <Accordion.Body className="B1">
                  We ask that you have successfully landed your first tech job in Sweden. Whether you’re in your first tech job or 10th, we believe everyone can offer a valuable perspective.  </Accordion.Body>

                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header className="mb-0">
                    <span className="mb-0 no_name_37">  What are you looking for in mentors?</span>
                  </Accordion.Header>
                  <Accordion.Body className="B1">
We are looking for mentors who are eager to share their experiences, encouraging, and knowledgeable about the tech scene in Sweden.  </Accordion.Body>
                </Accordion.Item>



                <Accordion.Item eventKey="2">
                  <Accordion.Header className="mb-0 no_name_37">
                    <span className="mb-0 no_name_37">Are the mentor meetings in person or virtual?</span>
</Accordion.Header>
                  <Accordion.Body className="B1">
Most of the mentor sessions are virtual. However, if mentors and mentees live in the same city and feel comfortable meeting up, we encourage that.  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header className="mb-0 no_name_37">
                    <span className="mb-0 no_name_37">Will I be paid for mentoring?</span>
                  </Accordion.Header>
                  <Accordion.Body className="B1">
                  No. The Pollination Mentoring Programme is free for mentees. This programme is a valuable opportunity to enhance your leadership and communication skills within a supportive community.   </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header className="mb-0 no_name_37">
                    <span className="mb-0 no_name_37">I still have questions. Who should I ask? </span>
                  </Accordion.Header>
                  <Accordion.Body className="B1">
                    Email us at contact@beela.se!
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>

            </Container>
          </Container>

          <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={false}>
        <div>
          <div className="hexagon">
            <img src="/images/testVanessa.png" alt="placeholder" />
          </div>
          <div className="myCarousel">
            <h3>Yi Li</h3>
            <h4>Beela Mentor - UX Designer</h4>
            <p>
            I like how we help each other and grow together in Beela. The journey has brought me new reflections, inspirations, and many motivations.
            </p>
          </div>
        </div>

        <div>
          <div className="hexagon">
            <img src="/images/testIvy.png" alt="placeholder" />
          </div>
          <div className="myCarousel">
            <h3>Akzharkyn Duisembiyeva  </h3>
            <h4>Beela Mentor - Security Engineer</h4>
            <p>
            Beela programme gave me a chance to get to know so many people that are willing to support each other. As a mentor I have met truly inspiring, smart and brave people who are finding their way to Swedish tech field. While mentee can learn from my technical experience, I can also talk to people from various backgrounds and improve my own skills and knowledge. 
            </p> 
            </div>
        </div>

          <div>
          <div className="hexagon">
            <img src="/images/testIvy.png" alt="placeholder" />
          </div>
          <div className="myCarousel">
            <h3>Rachael Ahn  </h3>
            <h4>Beela Mentor - Data Scientist</h4>
            <p>
            Beela's mentorship program allowed me to connect with other immigrant women in Sweden and prompt meaningful discussions about data, adjusting to a new culture, self-assurance in applying for jobs, and more. Highly recommend others entering the tech industry to join the Beela community and especially the mentorship program to grow your network.  </p>
              </div>
        </div>
      </Carousel>

          <Container style={{ minHeight: '160px', alignItems: 'center', marginTop: '3rem' , textAlign: 'center', padding:'4rem 0rem', backgroundColor: '#F9F2D4' }}>

            <h2 className="no_name_37 text-center " style={{ color: '#623762' }}>Beela has a community for you</h2>
            <p>Ask questions, network, and stay up-to-date about upcoming events. We’re an inclusive bunch and we’d love to have you!   
Our Slack community has special channels just for mentors to connect, network, or take a fika with other Beela members.</p>
<Link href="https://beela.slack.com/join/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ#/shared-invite/email" >
  <a target="_blank"><button type="button" className="btn  button slack-btn">Join Slack</button></a></Link>
 </Container >

      
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default PollinationForMentors