import Image from "next/image"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./Hero.module.scss"

export default function Hero() {
  return (
    <SectionWrapper color="SECONDARY_CREAM" padding="hero" maxWidth={967}>
      <div className={styles.sectionContainer}>
        <h1 className={`primary-berry text-center ${styles.sectionHeading}`}>Beela Programmes</h1>
        <div className={styles.imgContainer}>
          <Image
            height={369}
            width={458}
            layout="intrinsic"
            className={styles.img}
            src="images/programmes_hero.svg"
            alt="placeholder"
          />
        </div>
        <div className={styles.textContainer}>
          <h4 className={`primary-berry my-4 ${styles.subheading}`}>How can Beela help?</h4>
          <p className="B1 mb-5">
            We offer different programmes to fit your needs depending on where you are in your
            journey.
          </p>

          <ul className="B1">
            <li>
              Our Pollination Mentoring Programme connects you with mentors for 1-on-1 guidance
            </li>
            <li>
              Find projects and apprenticeships to hone your skills in the #announcements,
              #job-leads, and #projects-pro-bono Slack channels
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
