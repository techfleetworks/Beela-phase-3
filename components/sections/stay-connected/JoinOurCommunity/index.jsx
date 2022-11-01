import Image from "next/image"
import { Container, Row, Col } from "react-bootstrap"

import { Button } from "../../../elements/Button/index"
import { SectionWrapper } from "../../../layout/SectionWrapper"

import styles from "./JoinOurCommunity.module.scss"

export default function JoinOurCommunity() {
  return (
    <SectionWrapper color="SECONDARY_CREAM" padding="none">
      <Container fluid className="p-o">
        <Row className={styles.sectionContainer}>
          <Col>
            <Image
              height={534}
              width={436}
              layout="intrinsic"
              src="images/zen-computer-lady.png"
              alt="A girl sitting cross-legged in a meditative pose with a laptop on her lap, a coffee mug beside her and calendar in the background. An icon of a watering can labeled 'Take Care' is pouring water on her head which is shown growing plants."
            />
          </Col>

          <Col className={styles.contentContainer}>
            <h2 className={`primary-berry ${styles.heading}`}>Join Our Community</h2>
            <div className={styles.textContainer}>
              <h4 className={`primary-berry ${styles.subheading}`}>
                Our community uses Slack to connect
              </h4>
              <div className={styles.infoContainer}>
                <p className="B1">
                  If you’ve never used Slack before, it’s okay! It’s a discussion platform that many
                  tech companies use to communicate. We promise you’ll get the hang of it quickly.
                  Here are some of our most popular channels:
                </p>
                <ul className={`B1 ${styles.list}`}>
                  <li>
                    <b>#welcome</b> Introduce yourself and connect with other immigrants to Sweden.
                  </li>

                  <li>
                    <b>#encouragement</b> Ask questions, share your experiences, and receive
                    support.
                  </li>

                  <li>
                    <b>#job-leads</b> Share and view job descriptions from employers that welcome
                    diverse applicants.
                  </li>
                </ul>
              </div>
              <Button
                href="https://beela.slack.com/join/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ#/shared-invite/email"
                variant="primary_lightBG"
                title="Join Us On Slack"
                className="mx-auto"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  )
}
