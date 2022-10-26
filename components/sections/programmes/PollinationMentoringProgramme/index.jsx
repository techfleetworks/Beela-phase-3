import Image from "next/image"
import { Container, Row, Col } from "react-bootstrap"

import { Button } from "../../../elements/Button"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./PollinationMentoringProgramme.module.scss"

export default function PollinationMentoringProgramme() {
  return (
    <SectionWrapper color="SECONDARY_CREAM">
      <div className={styles.sectionContainer}>
        <h2 className={`text-center primary-berry ${styles.heading}`}>
          Pollination Mentoring Programme
        </h2>
        <div className={styles.headingContainer}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/home-pollination.jpg"
              alt="Three women speak to a crowd during a workshop for Beela."
              height={258}
              width={388}
              layout="intrinsic"
              className={styles.image}
            />
          </div>
          <div className={styles.headingText}>
            <h4 className={`primary-berry ${styles.subheading}`}>How can we help you grow?</h4>
            <p className="m-0 B2">
              Unsure about expectations for switching careers in Sweden? Or eager to share your
              experience?Our free programme offers 1-on-1 mentorship, along with events and
              workshops to help mentees get into tech.
            </p>
          </div>
        </div>

        <div className={styles.moreInfoContainer}>
          <div className={styles.infoWrapper}>
            <h4 className="primary-berry">Become a Mentee</h4>
            <p className="B2 text-center">
              Whether you&apos;re exploring a tech field or applying to jobs, a mentor can help you
              with your individualized needs.
            </p>
            <div>
              <Button
                variant="secondary_lightBG"
                title="Learn More"
                href="/pollination-for-mentees"
              />
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <h4 className="primary-berry">Become a Mentor</h4>
            <p className="B2 text-center">
              Share your experiences and make a difference in a mentee&apos;s life. Continue to
              learn through mentoring.
            </p>
            <div>
              <Button
                variant="secondary_lightBG"
                title="Learn More"
                href="/pollination-for-mentors"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}