import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./Career.module.scss"

import BeeCard from "../../../elements/BeeCard"

export default function Career() {
  return (
    <SectionWrapper padding="main" maxWidth={880}>
      <h2 className="primary-berry text-center my-2">3 Steps to Start a New Career</h2>

      <p className={`B2 ${styles.text}`}>
        We know that it’s not easy to change careers and move to a new country.
        <br />
        We are here to support you every step of the way.
        <span className={styles.italics}> Bzz: tech isn’t just coding!</span>
      </p>
      <div className={styles.cards}>
        <BeeCard
          src="../icons/bee1.svg"
          title="1. Join our community"
          text="Get support and share your experiences in our forum."
        />
        <BeeCard
          src="../icons/bee2.svg"
          title="2. Get experience"
          text="Explore tech fields and learn skills from our partners."
        />
        <BeeCard
          src="../icons/bee3.svg"
          title="3. Land a job"
          text="Receive mentorship and leverage your transferrable skills."
        />
      </div>
    </SectionWrapper>
  )
}
