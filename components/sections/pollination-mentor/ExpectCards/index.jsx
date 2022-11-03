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
      imgSource: "mentor-expect_1.jpg",
      altText:
        "Two women sitting on a bench in front of a brick wall looking and smiling at each other, each holding a glass soda bottle.",
    },
    {
      id: 1,
      description:
        "Mentees most often need help with CVs, interviews, and navigating the Swedish job market.",
      imgSource: "mentor-expect_2.jpg",
      altText:
        "Two people sitting at a desk with papers in front of them. One person is writing something on the paper.",
    },
    {
      id: 2,
      description:
        "Our mentorship community is here to support you, whether you’re a first-time mentor or very experienced.",
      imgSource: "mentor-expect_3.jpg",
      altText: "Three women sitting together at a table inside of a cafe. They are smiling.",
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
