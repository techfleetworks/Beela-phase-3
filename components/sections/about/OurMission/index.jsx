import Image from "next/image"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./OurMission.module.scss"

export default function OurMission() {
  return (
    <SectionWrapper color="PRIMARY_CORAL" maxWidth={900}>
      <div className={styles.sectionContainer}>
        <Image
          src="/images/queen_bees.png"
          height={319}
          width={325}
          alt="Three women standing next to one another. One is wearing glasses and a blue shirt, one is wearing a shirt with the letter B and a crown, and the other in a polkadot shirt and a hijab. Illustration."
        />
        <div className={styles.textContainer}>
          <h2 className="primary-berry mt-3">Our Mission</h2>
          <p className="B2">
            To help immigrant women and non-binary people in Sweden get tech jobs. We do this by
            offering mentorship programmes, providing support through our community and organizing
            career events.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
