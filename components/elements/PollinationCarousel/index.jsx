import { Carousel, Container, Row, Col } from "react-bootstrap"

import styles from "./PollinationCarousel.module.scss"

import { SectionWrapper } from "../../layout/SectionWrapper"

export default function PollinationCarousel({ color = "SECONDARY_CORNFLOWER", data }) {
  return (
    <>
      {data && (
        <SectionWrapper color={color} className={styles.sectionContainer}>
          <Carousel
            interval={null}
            indicators={false}
            nextIcon={
              <span
                aria-hidden="true"
                className={`carousel-control-next-icon ${styles.nextIcon}`}
              />
            }
            prevIcon={
              <span
                aria-hidden="true"
                className={`carousel-control-prev-icon ${styles.prevIcon}`}
              />
            }
          >
            {data.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <Container fluid className="p-0">
                  <Row className={styles.testimonialRow}>
                    <Col md={3} className="p-0 d-flex justify-content-center">
                      <img
                        className={styles.image}
                        src={`images/${testimonial.imgSource}`}
                        alt={testimonial.altText}
                      />
                    </Col>
                    <Col className="p-0">
                      <Carousel.Caption bsPrefix="captionContainer">
                        <div className={styles.captionContainer}>
                          <p className={`B2 ${styles.caption}`}>{testimonial.description}</p>
                          <div className={styles.captionHeading}>
                            <p className={`h4 ${styles.name}`}>{testimonial.name}</p>
                            <p className={`S1 ${styles.title}`}>{testimonial.title}</p>
                          </div>
                        </div>
                      </Carousel.Caption>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
            ))}
          </Carousel>
        </SectionWrapper>
      )}
    </>
  )
}
