import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"

import styles from "./Hero.module.scss"
import data from "../../../../mockdata/pollination.json"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import { Button } from "../../../elements/Button"

export default function Hero() {
  let buttonHref = data.session === true && data.mentor.url
  let showButton = data.session === true ? "" : "none"

  return (
    <SectionWrapper color="SECONDARY_CREAM" padding="pollination">
      <div className={styles.sectionContainer}>
        <div className={styles.headingContainer}>
          <h1 className={`primary-berry h2 mb-3`}>Pollination For Mentors</h1>
          <h3 className={`primary-berry ${styles.subheading}`}>{data.message}</h3>
        </div>
        <Container fluid className="p-0">
          <Row className={styles.contentContainer}>
            <Col className={styles.imgContainer}>
              <Image
                height={405}
                width={427}
                layout="intrinsic"
                className={styles.img}
                src="images/pollination-mentors_hero.svg"
                alt="placeholder"
              />
            </Col>
            <Col className={styles.textContainer}>
              <h4 className={`mb-4 primary-berry ${styles.cta}`}>
                Ready to help others get into tech?{" "}
              </h4>
              <p className={`B1 ${styles.infoText}`}>
                Our Pollination Mentoring Programme provides a space to help empower mentees to
                blossom.
              </p>

              <ul className={`B1 mb-5 ${styles.list}`}>
                <li>4 month programme</li>
                <li>1-on-1 session with mentee twice a month</li>
                <li>Special Slack groups for mentors</li>
                <li>Networking opportunities</li>
                <li>Opportunity to refine your leadership and communication skills</li>
              </ul>
              <Button
                style={{ display: showButton }}
                className={styles.applyBtn}
                title="Start Your Application"
                href={buttonHref}
                variant="primary_lightBG"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </SectionWrapper>
  )
}
