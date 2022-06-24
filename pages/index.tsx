import type { NextPage } from "next"
import Popper from "@popperjs/core"
import Link from "next/link"
import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Testimonials from "../components/Testimonials"
// import avatar from "../public/avatar.png"

// React-Bootstrap icons
import { Spotify } from "react-bootstrap-icons"

// React-Bootstrap imports
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import { wrap } from "module"

// import { useTestimonialsQuery } from "../graphql/generated"
// import { usePostsQuery } from "../graphql/generated"
// import { fieldNameFromStoreName } from "@apollo/client/cache"

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
      <main>
        <Navbar />

        {/* Hero */}
        <div className="container-fluid overflow-hidden" id="wrapper">
          <section id="section-hero">
            <Row className="text-center align-content-center justify-content-center" id="Hero">
              <Row xs={1} s={2} md={2} className="m-4 align-items-center justify-content-center">
                <Col
                  xs={{ order: 2 }}
                  sm={10}
                  md={{ span: 6, order: 1 }}
                  lg={6}
                  xl={5}
                  className="p-5 hero-text-wrapper"
                >
                  <h2 className="text-color__berry">
                    Bee <span className="svg-underline"> supported</span>,
                    <span className="svg-underline"> empowered</span>, and
                    <span className="svg-underline"> connected</span>
                    {/* {data?.testimonials?.data[0].attributes?.title} */}
                  </h2>
                  <div className="left-center-text">
                    <p className="B1 p-3">
                      We offer free resources to help women and non-binary Swedish immigrants start
                      tech careers.
                    </p>
                    <div className="">
                      <a
                        href="https://join.slack.com/t/beela/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button type="button" className="btn button">
                          Join Our Slack Community
                        </button>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col sm={{ order: 1 }} md={6} className="p-3">
                  <Image
                    src="/queenbees.png"
                    alt="Illustraion of three women, one wearing glasses and a blue shirt, one wearing a shirt with the letter B and a crown, and the other in a polkadot shirt and a hijab."
                    fluid
                  />
                </Col>
              </Row>
            </Row>
          </section>

          {/* Blaze Award*/}
          <Row
            xs={1}
            md={3}
            className="text-center align-content-center align-items-center justify-content-center justify-items-center p-3"
            id="blaze"
          >
            <Col xs={3} md={2}>
              <Image
                src="/images/bee_announcement.svg"
                alt="Illustration of a bee shouting into a blue megaphone"
                height={186}
                fluid
              />
            </Col>
            <Col md={8}>
              <h3 className="text-color__berry">
                Proud to announce Beela won the{" "}
                <a href="https://diversify.no/blaze-awards-2022/" target="_blank" rel="noreferrer">
                  2022 BLAZE Catalyst award!
                </a>
              </h3>
            </Col>
            <Col xs={3} md={2}>
              <a href="https://diversify.no/blaze-awards-2022/" target="_blank" rel="noreferrer">
                <Image
                  src="/images/blazelogo.svg"
                  alt="Logo of Blaze, a sanserif text colored with oranges and red"
                  width={286}
                  fluid
                />
              </a>
            </Col>
          </Row>

          {/* About Beela */}
          <div className="row p-5" id="jumbotron">
            {/* Hero */}
            <div className="container px-5" id="hero">
              {/* About Beela */}
              <div className="row" id="hero-container">
                <div className="col py-4 px-5 m-5">
                  <div className="conatiner">
                    <div className="container pb-4 pt-2">
                      <h1 id="about-beela">About Beela</h1>
                    </div>
                    <div className="container">
                      <p id="about-paragraph">
                        Beela was founded in 2021 by Juliana Araújo and Denise Muniz, who are both
                        Brazilian immigrants to Sweden. They met at an event organized by Women Hack.
                        Along with a mentorship program, Denise received career support from
                        Juliana—and landed a developer job. That’s how they realized how important
                        mentorship and support are for female and non-binary immigrants.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-5 py-5">
                  <img src="Denise-Juliana.png" alt="placeholder" />
                  {/* <Image src="/Denise-Juliana.png" alt="About Beela" layout='fill' /> */}
                </div>
              </div>
            </div>
          </div>

          {/* Our Team */}
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

                  <div className="col-sm-12 col-lg-4 card m-3">
                    <div className="card-body">
                      <div className="card-title">
                        <div>
                          <img src="juliana.png" alt="placeholder" />
                        </div>
                        <div className="header">
                        </div>
                        <span id="team-name">JULIANA ARAÚJO</span>
                        <p className="text-muted" id="team-title">
                          UX Designer
                        </p>
                        <p className="card-text" id="card-text">
                          Juliana is a Latina immigrant with 8+ years of experience working in tech,
                          leading product teams to develop data-driven products. She has a
                          Bachelor&apos;s in Information Systems and is currently writing her master
                          thesis in IT Project Management from Stockholm University.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-lg-4 card m-3">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="header">
                          <div>
                            <img src="denise.png" alt="placeholder" />
                          </div>
                        </div>
                        <span id="team-name">DENISE MUNIZ</span>
                        <p className="text-muted" id="team-title">
                          UX Designer
                        </p>
                        <p className="card-text" id="card-text">
                          Denise is a Latina immigrant and fullstack developer. She has over 10
                          years of experience working as a business analyst, but decided to change
                          her career path to software development after she moved to Sweden. She has
                          a Bachelor&apos;s in Information Systems and a Master&apos;s in Business &
                          Project Management.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="card-title">
                  <div>
                    <img src="zoe.png" alt="placeholder" />
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
                    <img src="anja.png" alt="placeholder" />
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
                    <img src="estefanny.png" alt="placeholder" />
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
                    <img src="raquel.png" alt="placeholder" />
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
                    <img src="milena.png" alt="placeholder" />
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
                    <img src="marcela.png" alt="placeholder" />
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
                    <img src="mae.png" alt="placeholder" />
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
                    <img src="nidhi.png" alt="placeholder" />
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
                    <img src="bee1.png" alt="placeholder" />
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
                    <img src="bee1.png" alt="placeholder" />
                  </div>
                  <span id="team-name">Hellen</span>
                  <p className="text-muted" id="team-title">
                    Volunteer
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Career Steps */}
          <section id="section-career">
            <Row
              className="text-center align-items-center align-content-center justify-content-center p-5"
              id="steps"
            >
              <Row className="justify-content-center">
                <Col sm={8}>
                  <div className="p-1">
                    <h2 className="H2 home-steps__title">3 Steps to Start a New Career</h2>
                  </div>
                  <div className="p-1">
                    <p className="B1">
                      We know that it’s not easy to change careers and move to a new country. We are
                      here to support you every step of the way.
                      <br />
                      <span className="italics">Bzz: tech isn’t just coding!</span>
                    </p>
                  </div>
                </Col>
              </Row>

              <Container fluid="md" className="justify-content-center align-content-center ">
                <Row xs={1} md={3} className="g-4 justify-content-center">
                  <Col className="mb-4 steps-col">
                    <Card>
                      <Card.Img variant="top" src="../images/bee1.svg" />
                      <Card.Body>
                        <Card.Title className="h4">1. Join our community</Card.Title>
                        <Card.Text>Get support and share your experiences in our forum.</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col className="mb-4 steps-col">
                    <Card>
                      <Card.Img variant="top" src="../images/bee2.svg" />
                      <Card.Body>
                        <Card.Title className="h4">2. Get experience</Card.Title>
                        <Card.Text>
                          Explore tech fields and learn skills from our partners.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="mb-4 steps-col">
                    <Card>
                      <Card.Img variant="top" src="../images/bee3.svg" />
                      <Card.Body>
                        <Card.Title className="h4">3. Land a job</Card.Title>
                        <Card.Text>
                          Receive mentorship and leverage your transferrable skills.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Row>
          </section>

          {/* Pollination Programme */}
          <section id="section-pollination">
            <Row
              className="text-center justify-content-center align-content-center"
              id="pollination"
            >
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
                    <p className="m-0">
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
                    <Col className="card m-5 justify-content-center " id="card-m5-steps-hex" >
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
                      Whether you’re exploring a tech field or applying to jobs, a mentor can help
                      you with your individualized needs.
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
                      <p id="header-text">
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

          {/* Podcast  */}
          <section id="section-podcast">
            <Row className="text-center justify-content-center align-content-center" id="podcast">
              <Container className="home-pollination__spacer">
                <Row className="text-color__berry">
                  <h2>Beela s Talk Podcast</h2>
                </Row>
                <Row xs={1} md={2} className="m-4 align-items-center justify-content-center">
                  <Col
                    xs={{ order: 2 }}
                    sm={10}
                    md={{ span: 6, order: 1 }}
                    lg={6}
                    xl={5}
                    className="p-5"
                  >
                    <p className="m-0 left-center-text">
                      Our podcast is filled with inspiring stories from Swedish immigrants who have
                      broken into tech. <br />
                      Catch up on all the buzz!
                    </p>
                    <div className="pt-3 left-center-text">
                      <a
                        href="https://open.spotify.com/show/1B1xgKaplQwslW05BoRDmX?si=aa23a69ce1174786"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Spotify size={40} className=" podcast-icon" />
                      </a>
                      <a
                        href="https://podcasts.apple.com/us/podcast/beelas-talk/id1624447735"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/podcast-apple.svg"
                          className="m-3 podcast-icon"
                          alt="Icon for Apple Podcasts, an icon of a person with two semi circles above them"
                        />
                      </a>
                      <a
                        href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81YTE1NDIwOC9wb2RjYXN0L3Jzcw"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/podcast-google.svg"
                          className="podcast-icon"
                          alt="Icon for Google Podcasts, an row of five divided lines in a diamond shape"
                        />
                      </a>
                    </div>
                  </Col>
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
                </Row>
              </Container>
            </Row>
          </section>
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default Home
