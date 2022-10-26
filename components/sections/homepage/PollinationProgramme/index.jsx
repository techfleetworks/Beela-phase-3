import Image from "next/image"
import Link from "next/link"
import { Button } from "../../../elements/Button"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./PollinationProgramme.module.scss"

function PollinationProgramme(props) {
  return (
    <SectionWrapper maxWidth={921} color="SECONDARY_CREAM">
      <div className={styles.sectionContainer}>
        <h2 className="text-center">Pollination Mentoring Programme</h2>
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
            <p className="m-0 B2">
              Our free programme connects mentors with mentees based on interests and availability.
              It offers 1-on-1 mentorship, along with networking events and career workshops.
            </p>
          </div>
        </div>
        <div className={styles.sectionDivider}></div>

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

export default PollinationProgramme
