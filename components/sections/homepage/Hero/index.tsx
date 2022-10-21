//Imports from Next.js
import Image from "next/image"

//Component Imports
import styles from "./Hero.module.scss"
import { Button } from "../../../elements/Button"
import { SectionWrapper } from "../../../layout/SectionWrapper"

export const Hero = () => {
  return (
    <SectionWrapper padding="hero" color="GRADIENT" maxWidth={955}>
      <div className={styles.sectionContainer}>
        <Image
          height={420}
          width={420}
          layout="intrinsic"
          src="/icons/queen_bees.svg"
          alt="Illustraion of three women, one wearing glasses and a blue shirt, one wearing a shirt with the letter B and a crown, and the other in a polkadot shirt and a hijab."
        />
        <div className={styles.textContainer}>
          <h2 className={`primary-berry ${styles.heading}`}>
            Bee <span className="svg-underline"> supported</span>,
            <span className="svg-underline"> empowered</span>, and{" "}
            <span className="svg-underline"> connected</span>
          </h2>

          <p className={`B2 ${styles.text}`}>
            Our welcoming community helps women and non-binary Swedish immigrants break into tech.
          </p>
          <Button
            variant="primary_lightBG"
            title="Join Our Slack Community"
            href="https://join.slack.com/t/beela/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
