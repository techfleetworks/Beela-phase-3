import Image from "next/image"
import { Container, Row, Col } from "react-bootstrap"

import styles from "./Hero.module.scss"

import { SectionWrapper } from "../../../layout/SectionWrapper"
import PollinationMentoringProgramme from "../PollinationMentoringProgramme"

export default function Hero() {
  return (
    <SectionWrapper color="SECONDARY_CREAM" padding="pollination">
      <div className={styles.sectionContainer}>
        <div className={styles.headingContainer}>
          <h1 className={`primary-berry mb-3`}>Beela Programmes</h1>
        </div>
        <Container fluid className="p-0">
          <Row className={styles.contentContainer}>
            <Col className={styles.textContainer}>
              <h4 className={`primary-berry ${styles.cta}`}>How can Beela help?</h4>
              <p className={`B1 ${styles.infoText}`}>
                We offer different programmes to fit your needs depending on where you are in your
                journey.
              </p>

              <ul className={`B1 ${styles.list}`}>
                <li>
                  Our Pollination Mentoring Programme connects you with mentors for 1-on-1 guidance
                </li>
                <li>
                  Find projects and apprenticeships to hone your skills in the <b>#announcements</b>
                  , <b>#job-leads</b> and <b>#projects-pro-bono</b> Slack channels
                </li>
              </ul>
            </Col>
            <Col className={styles.imgContainer}>
              <Image
                height={368}
                width={459}
                layout="intrinsic"
                className={styles.img}
                src="images/programmes_hero.png"
                alt="Three women looking together at a laptop screen. Their image is in black and white and the background has colourful graphic blocks."
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.sectionDivider}></div>
      <PollinationMentoringProgramme />
    </SectionWrapper>
  )
}
