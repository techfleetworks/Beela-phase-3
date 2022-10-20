import React from 'react';
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion"


export default function Donatefaq() {
  return (
      <div>
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
                    <span className="mb-0 no_name_37"> What is Beela’s mission?</span>
                  </Accordion.Header>
                  <Accordion.Body className="B1">
                    We are looking for mentors who are eager to share their experiences,
                    encouraging, and knowledgeable about the tech scene in Sweden.{" "}
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header className="mb-0 no_name_37">
                    <span className="mb-0 no_name_37">
                      Who does my donation help?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="B1">
                    Most of the mentor sessions are virtual. However, if mentors and mentees live in
                    the same city and feel comfortable meeting up, we encourage that.{" "}
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header className="mb-0 no_name_37">
                    <span className="mb-0 no_name_37">Why donate to Beela?</span>
                  </Accordion.Header>
                  <Accordion.Body className="B1">
                    No. The Pollination Mentoring Programme is free for mentees. This programme is a
                    valuable opportunity to enhance your leadership and communication skills within
                    a supportive community.{" "}
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header className="mb-0 no_name_37">
                    <span className="mb-0 no_name_37">
                      Is my donation tax deductable?{" "}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="B1">Email us at contact@beela.se!</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header className="mb-0 no_name_37">
                    <span className="mb-0 no_name_37">
                      Can I make anonymous donation?{" "}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="B1">Email us at contact@beela.se!</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header className="mb-0 no_name_37">
                    <span className="mb-0 no_name_37">
                      Can I make a recurring donation?{" "}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="B1">Email us at contact@beela.se!</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header className="mb-0 no_name_37">
                    <span className="mb-0 no_name_37">
                      How do I change or update my monthly donor information?{" "}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="B1">Email us at contact@beela.se!</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                  <Accordion.Header className="mb-0 no_name_37">
                    <span className="mb-0 no_name_37">
                     Is my donation secure?{" "}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="B1"></Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                  <Accordion.Header className="mb-0 no_name_37">
                    <span className="mb-0 no_name_37">
                     Does Beela sell, rent or trade donor information to other agencies?{" "}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body className="B1">Email us at contact@beela.se!</Accordion.Body>
                </Accordion.Item>

              </Accordion>
            </Container>
          </Container>
       
  </div>
  )
}
