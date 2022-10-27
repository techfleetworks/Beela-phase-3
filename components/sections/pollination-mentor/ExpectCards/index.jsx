import { Container, Row, Col } from "react-bootstrap"

import styles from "./ExpectCards.module.scss"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import { ExpectCard } from "../../../elements/ExpectCard"

function ExpectCards() {
  let cardData = [
    {
      id: 0,
      description:
        "Leverage your experience to help women and non-binary immigrants begin a tech career in Sweden.",
      imgSource: "mentor-expect1.png",
      altText: "Image of a person pointing to something on a laptop for another person",
    },
    {
      id: 1,
      description:
        "Mentees most often need help with CVs, interviews, and navigating the Swedish job market.",
      imgSource: "mentor-expect2.png",
      altText: "Image of a coffee mug",
    },
    {
      id: 2,
      description:
        "Our mentorship community is here to support you, whether you’re a first-time mentor or very experienced.",
      imgSource: "mentor-expect3.png",
      altText: "Image of a video conferencing screen with three women as attendees",
    },
  ]
  return (
    <SectionWrapper>
      <div className={styles.sectionContainer}>
        <h2 className={`primary-berry text-center ${styles.heading}`}>
          What to expect as a mentor
        </h2>
        <Container fluid className="p-0">
          <Row>
            {cardData.map((data) => (
              <Col sm={12} md={4} key={data.id}>
                <ExpectCard
                  imgSource={`images/${data.imgSource}`}
                  altText={data.altText}
                  description={data.description}
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
