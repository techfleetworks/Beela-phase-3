import Image from "next/image"

import styles from "./Hero.module.scss"

import { SectionWrapper } from "../../../layout/SectionWrapper"

export default function Hero() {
  return (
    <SectionWrapper color="SECONDARY_CREAM" padding="hero">
      <div className={styles.sectionContainer}>
        <h1 className="primary-berry mb-4">About Beela</h1>
        <div className={styles.imgContainer}>
          <Image
            height={369}
            width={428}
            layout="intrinsic"
            className={styles.img}
            src="images/Denise-Juliana.png"
            alt="Founders Denise and Juliana shown in a black and white image. Behind them are colourful graphic blocks."
          />
        </div>
        <div className={styles.textContainer}>
          <p className="B2">
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
