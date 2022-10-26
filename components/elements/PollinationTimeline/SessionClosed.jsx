import Image from "next/image"
import { Container, Row, Col } from "react-bootstrap"
import styles from "./PollinationTimeline.module.scss"

function SessionClosed(props) {
  return (
    <Container className={styles.container}>
      <Row className="justify-content-center align-items-center">
        <Col md={3}>
          <Image
            alt="Illustartion of a bee making an announcement using a megaphone"
            src="../icons/bee_announcement.svg"
            width={186}
            height={186}
          />
        </Col>
        <Col md={9}>
          <p className="h3 primary-berry">
            Applications are currently closed, but bee on the lookout for more information soon.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default SessionClosed
