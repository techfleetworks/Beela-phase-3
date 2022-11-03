import { Container, Row, Col } from "react-bootstrap"

import styles from "./EmpowerInformInspire.module.scss"

import { SectionWrapper } from "../../../layout/SectionWrapper"
import BeeCard from "../../../elements/BeeCard"

export default function EmpowerInformInspire() {
  return (
    <SectionWrapper padding="main">
      <Container className="p-0">
        <Row className={styles.cards}>
          <Col sm={12} md={4} className="d-flex justify-content-center">
            <BeeCard
              alt="A bee with their arms raised up in the air and looking happy. An illustration."
              src="../icons/bee-happy2.png"
              title="Empower"
              text="We help women and non-binary immigrants achieve their potential through coaching, mentoring and networking."
            />
          </Col>
          <Col sm={12} md={4} className="d-flex justify-content-center">
            <BeeCard
              alt="A bee holding a blue megaphone looking like it's making an announcement. An illustration."
              src="../icons/bee_announcement.png"
              title="Inform"
              text="We spread the word about what’s happening in the tech world: bootcamps, code academies, courses 
              and events."
            />
          </Col>
          <Col sm={12} md={4} className="d-flex justify-content-center">
            <BeeCard
              alt="A bee holding a blue ribbon labeled '1' and a flg that says 'You Did It'. An Illustration."
              src="../icons/bee_you-did-it.png"
              title="Inspire"
              text="We share encouraging stories from immigrant tech professionals to give you the confidence to leverage your skills."
            />
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  )
}
