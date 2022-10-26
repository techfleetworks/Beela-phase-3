import { Container, Row, Col } from "react-bootstrap"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./EmpowerInformInspire.module.scss"
import BeeCard from "../../../elements/BeeCard"

export default function EmpowerInformInspire() {
  return (
    <SectionWrapper padding="main">
      <Container className="p-0">
        <Row className={styles.cards}>
          <Col sm={12} md={4} className="d-flex justify-content-center">
            <BeeCard
              src="../icons/bee1.svg"
              title="Empower"
              text="We help women and non-binary immigrants achieve their potential through coaching, mentoring, and networking."
            />
          </Col>
          <Col sm={12} md={4} className="d-flex justify-content-center">
            <BeeCard
              src="../icons/bee_announcement.svg"
              title="Inform"
              text="We spread the word about what’s happening in the tech world: bootcamps, code academies, courses, 
              and events."
            />
          </Col>
          <Col sm={12} md={4} className="d-flex justify-content-center">
            <BeeCard
              src="../icons/bee_you-did-it.svg"
              title="Inspire"
              text="We share encouraging stories from immigrant tech professionals to give you the confidence to leverage your skills."
            />
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  )
}
