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
            We are committed to bridging the unemployment and skills gap among immigrant women and
            non-binary people hoping to start tech careers in Sweden. This is why we empower our
            community members to define their path, get unblocked, and trailblaze into careers in
            Swedish Tech.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
