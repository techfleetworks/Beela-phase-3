import { Container, Row, Col } from "react-bootstrap"

import styles from "./ExpectCards.module.scss"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import { ExpectCard } from "../../../elements/ExpectCard"

function ExpectCards() {
  let cardData = [
    {
      id: 0,
      title: "Mentor Matching",
      description: "We carefully match mentees with mentors based on interests and availability.",
      imgSource: "mentee-expect1.png",
      altText: "Icon of a woman sitting on a chair and looking at her phone.",
    },
    {
      id: 1,
      title: "Networking",
      description: "We offer invaluable networking sessions to facilitate connections.",
      imgSource: "mentee-expect2.png",
      altText: "Icon of two people shaking hands.",
    },
    {
      id: 2,
      title: "Workshops",
      description: "We host career advice and wellness workshops to support Swedish immigrants.",
      imgSource: "mentee-expect3.png",
      altText: "Icon of a woman sitting down on a couch and looking at a laptop.",
    },
  ]
  return (
    <SectionWrapper>
      <div className={styles.sectionContainer}>
        <h2 className={`primary-berry text-center ${styles.heading}`}>
          What to expect as a mentee
        </h2>
        <Container fluid className="p-0">
          <Row>
            {cardData.map((data) => (
              <Col sm={12} md={4} key={data.id}>
                <ExpectCard
                  imgSource={`images/${data.imgSource}`}
                  altText={data.altText}
                  description={data.description}
                  title={data.title}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </SectionWrapper>
  )
}

export default ExpectCards