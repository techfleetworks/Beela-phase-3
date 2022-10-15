import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./AboutBeela.module.css"

export default function AboutBeela() {
  return (
    <SectionWrapper color="SECONDARY_CREAM" padding="hero">
      <div className={styles.sectionContainer}>
        <h1 className="primary-berry">About Beela</h1>
        <div className={styles.imgContainer}>
          <img className={styles.img} src="images/Denise-Juliana.png" alt="placeholder" />
        </div>
        <div className={styles.textContainer}>
          <p className="B1">
            Beela was founded on March 8, 2021 by Juliana Araújo and Denise Muniz, both Brazilian
            immigrants to Sweden. After meeting at a tech fair, Juliana gave Denise the career
            advice that helped her overcome cultural barriers and land a job in programming. From
            there, they were inspired to empower underrepresented groups to break into tech.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
