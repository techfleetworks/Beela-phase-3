import styles from "./SupportBeela.module.scss"

import { SectionWrapper } from "../../../layout/SectionWrapper"
import { Button } from "../../../elements/Button"

export default function SupportBeela() {
  return (
    <SectionWrapper padding="main" maxWidth={700}>
      <div className={styles.sectionContainer}>
        <div className={styles.headingContainer}>
          <h2 className="primary-berry">Support Beela</h2>
          <p className="B2">
            Beela is a 100% volunteer-run organization. We’re grateful for your support in any
            capacity.
          </p>
        </div>

        <div className={styles.boxWrapper}>
          <div className={styles.boxContainer}>
            <h5>Volunteer</h5>
            <p className="B2">
              Our team is always on the lookout for new volunteers. Tell us about your skills - it
              could be writing, social media or design and we’ll see if there’s a match!
            </p>

            <Button
              href="mailto:contact@beela.se?subject=I want to support Beela!"
              variant="primary_lightBG"
              title="Email Us"
            />
          </div>

          <div className={styles.boxContainer}>
            <h5>Donate</h5>
            <p className="B2">
              We are a non-profit organization and any monetary donation helps us reach more women
              and non-binary immigrants in Sweden to break into tech.
            </p>
            <Button
              className={styles.button}
              href="/donate"
              variant="primary_lightBG"
              title="Donate"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
