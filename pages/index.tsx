import type { NextPage } from "next"
import Popper from "@popperjs/core"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import avatar from "../public/avatar.png"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// React-Bootstrap icons
import { ArrowRight } from "react-bootstrap-icons"

// React-Bootstrap imports
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"

// import { usePostsQuery } from "../graphql/generated"

//
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  // const { data, error, loading } = usePostsQuery()

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
      <main>

        <Navbar />


        {/* Hero */}
        <div className="container-fluid overflow-hidden" id="wrapper">
          <Row className="text-center align-content-center justify-content-center hero-image-home" id="Hero">
            <Row className="justify-content-center">
              <Col sm={10} md={8} lg={6} xl={5} className="mb-4 pt-4">
                <h1 className="home-header__hero">
                  It&apos;s possible to get into tech!
                  {/* {data?.posts?.data[0].attributes?.title} */}
                </h1>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={10} md={8} lg={6} xl={5} className="mb-4">
                <p className="B1">
                  We offer free resources to help women and non-binary Swedish immigrants start tech
                  careers.
                </p>
              </Col>
            </Row>
            <div className="mb-4">
              <button type="button" className="btn button">
                Join Our Slack Community
              </button>
            </div>
          </Row>


          {/* Career Steps */}
          <Row className="text-center align-content-center justify-content-center p-5" id="steps">
            <Row className="justify-content-center">
              <Col sm={8} id="career-content">
                <div className="p-1">
                  <h2 className="H2 home-steps__title">3 Steps to Start a New Career</h2>
                </div>
                <div className="p-1">
                  <p className="B1">
                    We know that it&apos;s not easy to change careers and move to a new country.
                    <br /> We are here to support you every step of the way.
                  </p>
                </div>
              </Col>
            </Row>


            <Container fluid="md" className="justify-content-center align-content-center ">
              <Row xs={1} md={3} className="g-4 justify-content-center" id="three-card-layout">
                <Col className="mb-4 steps-col content-group-1">
                  <Card>
                    <Card.Img variant="top" src="../images/bee1.png" />
                    <Card.Body>
                      <Card.Title className="h4">1. Join Our Community</Card.Title>
                      <Card.Text>Get support and share your expertise in our forum.</Card.Text>
                      <Card.Text>
                        <Link href="">
                          <a>
                            Call to Action <ArrowRight />
                          </a>
                        </Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="mb-4 steps-col content-group-2">
                  <Card>
                    <Card.Img variant="top" src="../images/bee2.png" />
                    <Card.Body>
                      <Card.Title className="h4">2. Get Experience</Card.Title>
                      <Card.Text>
                        Put your skills to work with projects from our partners.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mb-4 steps-col content-group-3">
                  <Card>
                    <Card.Img variant="top" src="../images/bee3.png" />
                    <Card.Body>
                      <Card.Title className="h4">3. Land a Job</Card.Title>
                      <Card.Text>Receive unparalleled mentorship and resources.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Row>

          {/* Pollination Programme */}
          <Row className="text-center justify-content-center align-content-center" id="pollination">
            <Row className="mt-5">
              <h2>Pollination Mentoring Programme</h2>
            </Row>
            <Container>
              <Row xs={1} md={2} className="m-5 align-items-center">
                <Col className="p-3">
                  <div className="image-wrapper">
                    <img
                      src="/images/home-pollination.jpg"
                      alt="Three women speak to a crowd during a workshop for Beela."
                      className="img-fluid home-pollination_img"
                    />
                  </div>
                </Col>
                <Col className="p-3">
                  <p>
                    Pollination Mentoring Programme is a free programme that connects mentors with
                    mentees. Our transformative programme offers 1:1 mentorship, along with
                    resources.
                  </p>
                </Col>
              </Row>
            </Container>

            <hr />

            <Container>
              <Row
                xs={1}
                md={2}
                className="align-items-top justify-content-center display-flex flex-wrap"
              >
                <Col xs={8} sm={5} lg={4} className="p-4">
                  <span>Become a Mentee</span>
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
                <Col xs={8} sm={5} lg={4} className="p-4">
                  <span>Become a Mentor</span>
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

          {/* Testimonials */}
          <div className="row text-center" id="testimonials">
            <div className="col align-items-center p-5">
              <div className="d-flex flex-column">
                <div className="p-1">
                  <h2>They did it—and so can you</h2>
                </div>
                <div className="p-1">
                  <p id="header-text">
                    We are proud of our community members who have started their tech careers.
                  </p>
                </div>
              </div>

              <div className="container">
                <div className="card-deck d-flex flex-row flex-wrap flex-md-nowrap justify-content-center">
                  <div className="col card m-3">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="header">
                          <div className="avatar">
                            <Image src={avatar} alt="Avatar picture" id="avatar-image" />
                          </div>
                        </div>
                        <span>Jane Doe</span>
                        <p className="text-muted"> UX Designer</p>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col card m-3">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="header">
                          <div className="avatar">
                            <Image src={avatar} alt="Avatar picture" id="avatar-image" />
                          </div>
                        </div>
                        <span>Jane Doe</span>
                        <p className="text-muted"> UX Designer</p>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col card m-3">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="header">
                          <div className="avatar">
                            <Image src={avatar} alt="Avatar picture" id="avatar-image" />
                          </div>
                        </div>
                        <span>Jane Doe</span>
                        <p className="text-muted"> UX Designer</p>
                      </div>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Podcast  */}
          <div className="row align-items-center text-center" id="podcast">
            <div className="col align-items-center p-5">
              <div className="p-1">
                <h2>Beela’s Talk Podcast</h2>
              </div>

              <div
                className="d-flex flex-row flex-wrap align-items-center justify-content-center flex-md-nowrap p-3"
                id="video"
              >
                <div className="col m-3">
                  <p className="B1">
                    Our podcast is filled with inspiring stories from Swedish immigrants who have
                    broken into tech. Catch up on all the buzz!
                  </p>
                </div>
                <div className="col d-flex justify-content-center">
                  <div className="rectangle"></div>
                </div>
              </div>

              <div className="container">
                <div className="p-3 ">
                  <button type="button" className="btn btn-dark text-primary" id="listen-button">
                    Start Listening
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default Home
