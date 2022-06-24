import type { NextPage } from "next"
import Popper from "@popperjs/core"
import Link from "next/link"
import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Testimonials from "../components/Testimonials"

// React-Bootstrap icons
import { Spotify } from "react-bootstrap-icons"

// React-Bootstrap imports
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Accordion from "react-bootstrap/Accordion"

const PollinationForMentees : NextPage = () => {
  
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
                            <h1 className="no_name_37">Pollination for mentees</h1>
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
                        <Image src="/Hero-Image.png" alt="About Beela" width={500} height={340} />
                    </div>
                </div>
            </div>
        </div>

        <Container className="py-5">
            <h2 className="text-center no_name_37 mb-5 py-5">What to expect as a mentee</h2>
            <Row className="mt-4">
                <Col md={6} lg={4} className="text-center">
                    <Card style={{ width: '18rem', position: "relative", backgroundColor:'#E6C619'  }}>
                        <Card.Img variant="top" src="/avatar.png"  className="img-card-relative"/>
                        <Card.Body  className="py-5">
                            <h5>Mentor Matching</h5>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card&apos;s content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={4} className="text-center">
                    <Card style={{ width: '18rem' , backgroundColor:'#E6C619' }}>
                        <Card.Img variant="top" src="/avatar.png" className="img-card-relative" />
                        <Card.Body  className="py-5">
                        <h5>Networking</h5>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card&apos;s content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={4} className="text-center">
                    <Card style={{ width: '18rem', backgroundColor:'#E6C619' }}>
                       
                        <Card.Img variant="top" src="/avatar.png"  className="img-card-relative"/>
                        <Card.Body  className="py-5">
                        <h5>Workshops</h5>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card&apos;s content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
          
            </Row>
        </Container>

        <Container fluid className="py-5" style={{ backgroundColor:'#F9F2D4' }}>
            <Container>
            <h3 className="no_name_37 text-center">Frequently Asked Questions</h3>
            <Accordion defaultActiveKey="0" className="my-5">
            <Accordion.Item eventKey="0">
                    
                        <Accordion.Header className="mb-0">
                            What background do I need to apply for the programme?
                            
                        </Accordion.Header>
                    
                        <Accordion.Body  className="B1">
                            We are open to applicants from a range of backgrounds. Diversity only helps enhance the tech community! We&apos;ve had mentees in our programme who are exploring tech careers, as well as those who are actively applying to jobs.
                        </Accordion.Body>
                    
            </Accordion.Item>

                <Accordion.Item eventKey="1">
                        <Accordion.Header className="mb-0">
                        <span className="mb-0 no_name_37">  What are you looking for in applicants?</span> 
                        </Accordion.Header>
                        <Accordion.Body   className="B1">
                       We are looking for applicants who are focused on self-development, curious, and ready to make a mark on Sweden&apos;s tech scene! 
                        </Accordion.Body>
                    </Accordion.Item>
              
                

                <Accordion.Item eventKey="2">
                        <Accordion.Header className="mb-0 no_name_37">
                        <span className="mb-0 no_name_37">   What qualifications will my mentor have?</span> 
                        </Accordion.Header>
                        <Accordion.Body   className="B1">
                We ask that mentors have successfully landed their first tech job in Sweden. Whether they’re in their first tech job or 10th, we believe everyone can offer a valuable perspective.
                        </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                        <Accordion.Header className="mb-0 no_name_37">
                        <span className="mb-0 no_name_37">  Are the mentor meetings in person or virtual?</span> 
                        </Accordion.Header>
                        <Accordion.Body  className="B1">
                   Most of the mentor sessions are virtual. However, if mentors and mentees live in the same city and feel comfortable meeting up, we encourage that.
                        </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                        <Accordion.Header className="mb-0 no_name_37">
                       <span className="mb-0 no_name_37">I still have questions. Who should I ask? </span> 
                        </Accordion.Header>
                        <Accordion.Body  className="B1">
                            Email us at contact@beela.se!
                        </Accordion.Body>
                </Accordion.Item>
              
                </Accordion>

            </Container>
        </Container>

        <Testimonials /> 

        <Container style={{minHeight: '160px', alignItems: 'center', marginTop: '3rem'}}>
        
            <h2 className="no_name_37 text-center " style={{color: '#623762' }}>Beela has a community for you</h2>
            <h5 className=" text-center " >Find out how you can engage with Beela members</h5>
        </Container >

              {/* Podcast  */}
          <section id="section-podcast">
            <Row className="text-center justify-content-center align-content-center" id="podcast">
              <Container className="home-pollination__spacer">
                
                <Row xs={1} md={2} className="m-4 align-items-center justify-content-center">
                <Col xs={{ order: 1 }} sm={10} md={{ span: 6, order: 2 }} lg={6} xl={5} className="p-3">
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
                    md={{ span: 6}}
                    lg={6}
                    xl={5}
                    className="p-2"
                  >
                    <h3 className="no_name_37" style={{textAlign: 'start'}}>Podcast</h3>
                    <p className="m-0 B1" style={{maxWidth: '268px',textAlign: 'start'}}>
                    Audio inspiration is a click away. Absorb unique insights around diversity, equity, and inclusion in the tech industry.
                    </p>
                    <div className="pt-3 left-center-text">
                    <Link href="https://beela.slack.com/join/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ#/shared-invite/email">
                        <a target="_blank" >
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

          <section id="section-podcast">
            <Row className="text-center justify-content-center align-content-center" id="podcast">
              <Container className="home-pollination__spacer">
                
                <Row xs={1} md={2} className="m-4 align-items-center justify-content-center">
                <Col xs={{ order: 1 }} sm={10} md={{ span: 6, order: 2 }} lg={6} xl={5} className="p-3">
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
                    md={{ span: 6}}
                    lg={6}
                    xl={5}
                    className="p-2"
                  >
                    <h3 className="no_name_37" style={{textAlign: 'start'}}>Slack</h3>
                    <p className="m-0 B1" style={{maxWidth: '268px',textAlign: 'start'}}>
                    Ask questions, network, and stay up-to-date about upcoming events. We&apos;re an inclusive bunch, and we&apos;d love to have you!
                    </p>
                    <div className="pt-3 left-center-text">
                    <Link href="https://beela.slack.com/join/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ#/shared-invite/email">
                        <a target="_blank" >
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


          <Footer />
        </div>
      </main>
    </div>
  )
}

export default PollinationForMentees