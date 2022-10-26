import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"

import styles from "./Hero.module.scss"
import data from "../../../../mockdata/pollination.json"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import { Button } from "../../../elements/Button"

export default function Hero() {
  let buttonHref = data.session === true && data.mentee.url
  let showButton = data.session === true ? "" : "none"

  return (
    <>
      <SectionWrapper color="SECONDARY_CREAM" padding="pollination">
        <div className={styles.sectionContainer}>
          <div className={styles.headingContainer}>
            <h1 className={`primary-berry h2 mb-3`}>Pollination For Mentees</h1>
            <h3 className={`primary-berry ${styles.subheading}`}>{data.message}</h3>
          </div>
          <Container fluid className="p-0">
            <Row className={styles.contentContainer}>
              <Col className={styles.textContainer}>
                <h4 className={`mb-4 ${styles.cta}`}>Ready to get into tech? </h4>
                <p className={`B1 ${styles.infoText}`}>
                  Our free Pollination Mentoring Programme provides a space to grow and blossom.
                </p>

                <ul className={`B1 mb-5 ${styles.list}`}>
                  <li>4 month programme</li>
                  <li>1-on-1 session with a mentor twice a month</li>
                  <li>Special workshops for cover letters and CVs</li>
                  <li>Supportive community</li>
                  <li>3 hours/week time commitment</li>
                </ul>
                <Button
                  style={{ display: showButton }}
                  className={styles.applyBtn}
                  title="Start Your Application"
                  href={buttonHref}
                  variant="primary_lightBG"
                />
              </Col>
              <Col className={styles.imgContainer}>
                <Image
                  height={360}
                  width={462}
                  layout="intrinsic"
                  className={styles.img}
                  src="images/pollination-mentee_hero.svg"
                  alt="placeholder"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </SectionWrapper>
    </>
  )
}
