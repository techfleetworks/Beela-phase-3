import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./EmpowerInformInspire.module.scss"
import BeeCard from "../../../elements/BeeCard"

export default function EmpowerInformInspire() {
  return (
    <SectionWrapper padding="main">
      <div className={styles.cards}>
        <BeeCard
          src="../icons/bee1.svg"
          title="Empower"
          text="We help women and non-binary immigrants achieve their potential through coaching, mentoring, and networking."
        />
        <BeeCard
          src="../icons/bee_announcement.svg"
          title="Inform"
          text="We spread the word about what’s happening in the tech world: 
          bootcamps, code academies, courses, and events."
        />
        <BeeCard
          src="../icons/bee_you-did-it.svg"
          title="Inspire"
          text="We share stories about people who have built careers in tech. We want to help you gain
          confidence leveraging your skills in real-world projects."
        />
      </div>
    </SectionWrapper>
  )
}
