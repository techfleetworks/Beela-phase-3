import { Carousel } from "react-bootstrap"

import { TeamCard } from "../TeamCard"

import styles from "./TestimonialCarousel.module.scss"
import data from "../../../mockdata/testimonial.json"

function TestimonialCarousel() {
  return (
    <>
      {data && (
        <div className={styles.sectionContainer}>
          <Carousel
            interval={null}
            // indicators={false}
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
                <div className={styles.testimonialContainer}>
                  <TeamCard
                    imgSource={testimonial.img}
                    name={testimonial.name}
                    title={testimonial.title}
                    description={testimonial.about}
                    isTestimonial
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </>
  )
}

export default TestimonialCarousel
