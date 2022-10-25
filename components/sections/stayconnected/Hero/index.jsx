import Image from "next/image"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./Hero.module.scss"

export default function Hero() {
  return (
    <SectionWrapper padding="hero" color="SECONDARY_CREAM">
      <div className={styles.sectionContainer}>
        <h1 className="primary-berry" style={{ marginBottom: "2rem" }}>
          Stay Connected
        </h1>
        <div className={styles.imgContainer}>
          <Image
            height={369}
            width={428}
            layout="intrinsic"
            className={styles.img}
            src="images/stayconnected-hero.svg"
            alt="placeholder"
          />
        </div>
        <div className={styles.textContainer}>
          <h4 style={{ marginTop: "5rem", marginBottom: "2rem" }} className="primary-berry">
            Come join us
          </h4>
          <p className="B1 mb-4">
            We&apos;re ready to support your tech journey in Sweden in a variety of ways. We want to
            welcome you and encourage you along the way.
          </p>
          <p className="B1 mt-4 pt-4">We can&apos;t wait to connect with you.</p>
        </div>
      </div>
    </SectionWrapper>
  )
}
