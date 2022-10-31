import Image from "next/image"

import { Button } from "../../../elements/Button/index"
import { SectionWrapper } from "../../../layout/SectionWrapper"

import styles from "./JoinOurCommunity.module.scss"

export default function JoinOurCommunity() {
  return (
    <SectionWrapper color="SECONDARY_CREAM" padding="none">
      <div className={styles.sectionContainer}>
        <Image
          height={534}
          width={436}
          className={styles.img}
          src="images/LeftColumn.svg"
          alt="placeholder"
        />

        <div className={styles.textContainer}>
          <h2 className={styles.h2}>Join Our Community</h2>
          <h4 style={{ marginTop: "4rem", marginBottom: "1rem" }} className={styles.h4}>
            Our Community Uses Slack to Connect
          </h4>
          <p className="B1" style={{ lineHeight: "170%" }}>
            If you’ve never used Slack before, it’s okay! It’s a discussion platform that many tech
            companies use to communicate. We promise you’ll get the hang of it quickly. Here are
            some of our most popular channels:
          </p>
          <ul style={{ marginBottom: "1rem" }}>
            <li className={styles.list}></li>
            <p className="B1" style={{ lineHeight: "170%" }}>
              {" "}
              · <b>#welcome</b> Introduce yourself and connect with other immigrants to Sweden.
            </p>
            <li className={styles.list}></li>
            <p className="B1" style={{ lineHeight: "170%" }}>
              {" "}
              · <b>#encouragement</b> Ask questions, share your experiences, and receive support.{" "}
            </p>
            <li className={styles.list}></li>
            <p className="B1" style={{ lineHeight: "170%" }}>
              {" "}
              · <b>#job-leads</b> Share and view job descriptions from employers that welcome
              diverse applicants.{" "}
            </p>
          </ul>
          <div className={styles.button}>
            <Button href="/about" variant="primary_lightBG" title="Join Us On Slack" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
