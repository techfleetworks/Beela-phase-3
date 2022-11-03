import Image from "next/image"
import { Container, Row, Col } from "react-bootstrap"

import { Button } from "../../../elements/Button"
import PollinationTimeline from "../../../elements/PollinationTimeline"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./PollinationMentoringProgramme.module.scss"

export default function PollinationMentoringProgramme() {
  return (
    <SectionWrapper color="SECONDARY_CREAM" padding="none">
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
              Life is often about the connections we make. Beela understands this statement and in
              response created a programme that offers 1 on 1 mentorships. We match mentees with a
              mentor based on skill set, personality and specializations of interest. The mentor’s
              goal is to guide mentees as they learn more about the industry and search for career
              opportunities in tech.
            </p>
          </div>
        </div>
        <PollinationTimeline />
        <div className={styles.moreInfoContainer}>
          <div className={styles.infoWrapper}>
            <h4 className="h5">Become a Mentee</h4>
            <p className="B1 text-center">
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
            <h4 className="h5">Become a Mentor</h4>
            <p className="B1 text-center">
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
