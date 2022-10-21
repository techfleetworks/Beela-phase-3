import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./SupportBeela.module.scss"
import { Button } from "../../../elements/Button"

export default function SupportBeela() {
  return (
    <SectionWrapper color="TRUE_WHITE" padding="hero">
      <div className={styles.sectionContainer}>
        <div className={styles.headingContainer}>
            <h2 className="primary-berry">Support Beela</h2>
            <p className="B2">Beela is a 100% volunteer-run organization. 
            We’re grateful for your support in any capacity. </p>
        </div>
        
    <div className={styles.boxWrapper}>
        <div className={styles.boxContainer}>
          <h5 className="TRUE_BLACK">Volunteer</h5>
          <p className="B2">
            Our team is always on the lookout for new volunteers. 
            Tell us about your skills (this could be writing, social media, or design), 
            and we’ll see if there’s a match!</p>
                <div className={styles.buttonContainer}>
                <Button 
                    href="mailto:email@example.com"
                    variant="primary_lightBG"
                    title="Email Us"
                />
                </div>
        </div>

        <div className={styles.boxContainer}>
          <h5 className="TRUE_BLACK">Donate</h5>
          <p className="B2">
            We are a nonprofit organization, and any monetary donation helps us
             reach more female and non-binary immigrants in Sweden.          </p>
                <div className={styles.buttonContainer}>
                    <Button
                    href="/about"
                    variant="primary_lightBG"
                    title="Donate"
                     />
                </div>
        </div>
</div>

      </div>
    </SectionWrapper>
  )
}
