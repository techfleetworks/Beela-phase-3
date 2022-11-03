import Image from "next/image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "./Blaze.module.scss"
import { SectionWrapper } from "../../../layout/SectionWrapper"

function BlazeAnnouncement(props) {
  return (
    <SectionWrapper
      classNameSection={styles.sectionContainer}
      className={styles.container}
      maxWidth={1050}
      padding="none"
    >
      <Image
        src="/icons/bee_announcement.png"
        alt="A bee shouting into a blue megaphone. Illustration."
        height={187}
        width={186}
        layout="intrinsic"
      />
      <div className={styles.textContainer}>
        <h3 className={`primary-berry my-4 ${styles.text}`}>
          Proud to announce Beela won the{" "}
          <a href="https://diversify.no/blaze-awards-2022/" target="_blank" rel="noreferrer">
            2022 BLAZE Catalyst award!
          </a>
        </h3>
      </div>

      <div className={styles.blaze}>
        <a href="https://diversify.no/blaze-awards-2022/" target="_blank" rel="noreferrer">
          <Image
            src="/images/blaze-logo.png"
            alt="Blaze Logo, a sanserif text colored with orange and red"
            height={57}
            width={286}
            layout="intrinsic"
          />
        </a>
      </div>
    </SectionWrapper>
  )
}

export default BlazeAnnouncement
