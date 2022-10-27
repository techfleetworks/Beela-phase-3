import Image from "next/image"
import styles from "./ApprenticeshipProgramme.module.scss"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import { Button } from "../../../elements/Button"

export default function ApprenticeshipProgramme() {
  return (
    <SectionWrapper padding="main" color="PRIMARY_CORAL" maxWidth={603}>
      <div className={styles.sectionContainer}>
        <Image
          src="/icons/queen_bees.svg"
          height={319}
          width={325}
          alt="An illustration of three women standing next to one another"
        />
        <h2 className={`primary-berry ${styles.heading}`}>We are growing with you</h2>
        <p className="B1 p-0">
          Responding to the needs of our community is important to us. We are working hard to build
          programmes to best fit your needs.
        </p>
        <div className={styles.apprenticeshipContainer}>
          <h4 className={`primary-berry ${styles.subheading}`}>Apprenticeship Programme</h4>
          <p className="B1">
            Beela is in the process of partnering with companies to provide the opportunity to work
            on real-world projects. Stay tuned for updates on Slack.
          </p>
          <Button
            title="Continue To Slack"
            variant="primary_lightBG"
            href="https://beela.slack.com/join/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ#/shared-invite/email"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
