import Image from "next/image"
import { Button } from "../../../elements/Button"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./OtherWaysToHelp.module.scss"

export default function OtherWaysToHelp() {
  return (
    <SectionWrapper color="PRIMARY_CORAL" padding="main">
      <div className={styles.contentContainer}>
        <div className="d-flex align-items-center justify-content-center flex-column flex-md-row text-center">
          <h2 className="primary-berry me-4">
            <span className="svg-underline">Other Ways </span>to Support Beela
          </h2>
          <Image
            src={"../icons/bee_support.svg"}
            alt={"Icon of two bees happy together"}
            height={68}
            width={66}
            layout="intrinsic"
          />
        </div>
        <div className={styles.list}>
          <h4 className={styles.listItem}>&#x2022; Corporate Sponsorships</h4>
          <h4 className={styles.listItem}>&#x2022; Monthly Meeting Space and Catering</h4>
          <h4 className={styles.listItem}>&#x2022; Networking Events for Mentees</h4>
          <h4 className={styles.listItem}>&#x2022; Job Opportunities and Internships</h4>
        </div>
        <Button
          href="mailto:contact@beela.se?subject=I want to support Beela!"
          title="Email Us To Learn More"
          variant="primary_lightBG"
        />
      </div>
    </SectionWrapper>
  )
}
