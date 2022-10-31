import Image from "next/image"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./BlazeAnnouncement.module.scss"

function BlazeAnnouncement(props) {
  return (
    <SectionWrapper
      classNameSection={styles.sectionContainer}
      className={styles.container}
      maxWidth={1050}
      padding="none"
    >
      <div className="me-3">
        <Image
          src="/icons/bee_announcement.png"
          alt="Illustration of a bee shouting into a blue megaphone"
          height={187}
          width={186}
          layout="intrinsic"
        />
      </div>

      <h3 className={`primary-berry my-4 ${styles.text}`}>
        Proud to announce Beela won the{" "}
        <a href="https://diversify.no/blaze-awards-2022/" target="_blank" rel="noreferrer">
          2022 BLAZE Catalyst award!
        </a>
      </h3>

      <div className="m-5">
        <a href="https://diversify.no/blaze-awards-2022/" target="_blank" rel="noreferrer">
          <Image
            src="/icons/blazelogo.svg"
            alt="Logo of Blaze, a sanserif text colored with oranges and red"
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
