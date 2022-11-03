import Image from "next/image"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./OurName.module.scss"

export default function OurName() {
  return (
    <SectionWrapper color="SECONDARY_CREAM" maxWidth={900}>
      <div className={styles.sectionContainer}>
        <Image
          src="/images/about-us.jpg"
          alt="A group of women of diverse ethnic backgrounds sitting together on a staircase, smiling at one another."
          width={520}
          height={330}
        />
        <div className={styles.textContainer}>
          <h2 className="primary-berry mt-3">Our Name</h2>
          <p className="B2">
            Bees are hard workers. Ela means &apos;her&apos; in Portuguese. Combine those two words,
            and you&apos;ve got Beela: a non-profit dedicated to helping women and non-binary
            immigrants break into tech in Sweden.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
