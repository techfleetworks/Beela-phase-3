import Image from "next/image"
import { Container, Row, Col } from "react-bootstrap"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./Hero.module.scss"

import JoinOurCommunity from "../JoinOurCommunity"

export default function Hero() {
  return (
    <SectionWrapper color="SECONDARY_CREAM" padding="pollination">
      <div className={styles.sectionContainer}>
        <h2 className={`primary-berry ${styles.heading}`}>Stay Connected</h2>
        <div className={styles.imgContainer}>
          <Image
            height={369}
            width={428}
            layout="intrinsic"
            className={styles.img}
            src="images/stay-connected_hero.png"
            alt="Two women working together at a desk"
          />
        </div>
        <div className={styles.textContainer}>
          <h4 className={`primary-berry ${styles.subheading}`}>Come join us!</h4>
          <p className="B1">
            We&apos;re ready to support your tech journey in Sweden in a variety of ways. We want to
            welcome you and encourage you along the way.
          </p>
          <p className="B1">We can&apos;t wait to connect with you.</p>
        </div>
      </div>
      <div className={styles.sectionDivider}></div>
      <JoinOurCommunity />
    </SectionWrapper>
  )
}