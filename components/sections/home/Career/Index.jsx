import { Container, Row, Col } from "react-bootstrap"

import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./Career.module.scss"

import BeeCard from "../../../elements/BeeCard"

export default function Career() {
  return (
    <SectionWrapper padding="main" maxWidth={875}>
      <h2 className="primary-berry text-center my-2">3 Steps to Start a New Career</h2>

      <p className={`B1 ${styles.text}`}>
        We know that it’s not easy to change careers and move to a new country.
        <br />
        We are here to support you every step of the way. Bzz: tech isn’t just coding!
      </p>
      <Row className={styles.cards}>
        <Col sm={12} md={4} className="d-flex justify-content-center">
          <BeeCard
            src="../icons/bee-happy.png"
            alt="A bee with their arms crossed and looking happy. An illustration."
            title="1. Join our community"
            text="Get support and share your experiences in our forum."
          />
        </Col>
        <Col sm={12} md={4} className="d-flex justify-content-center">
          <BeeCard
            src="../icons/bee-excited.png"
            alt="A bee with their hands together and looking excited. An illustration."
            title="2. Get experience"
            text="Explore tech fields and learn skills from our partners."
          />
        </Col>
        <Col sm={12} md={4} className="d-flex justify-content-center">
          <BeeCard
            src="../icons/bee-new-office.png"
            alt="A bee holding a purple box labelled 'New Office'. An illustration."
            title="3. Land a job"
            text="Receive mentorship and leverage your transferrable skills."
          />
        </Col>
      </Row>
    </SectionWrapper>
  )
}
