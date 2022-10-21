import Image from "next/image"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./OurMission.module.scss"

export default function OurMission() {
  return (
    <SectionWrapper color="PRIMARY_CORAL" maxWidth={900}>
      <div className={styles.sectionContainer}>
        <Image
          src="/icons/queen_bees.svg"
          height={364}
          width={325}
          alt="Our mission icon - an illustration of three women standing next to one another"
        />
        <div className={styles.textContainer}>
          <h2 className="primary-berry">Our Mission</h2>
          <p className="B2">
            We are committed to decreasing the unemployment gap between foreign-born women and
            native Swedes. We empower our community to define their path, get unblocked, and
            trailblaze into tech careers.{" "}
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
