import Image from "next/image"

import { SectionWrapper } from "../../../layout/SectionWrapper"
import { Button } from "../../../elements/Button"
import styles from "./news.module.scss"

export default function newsletter() {
  return (
    <SectionWrapper color="SECONDARY_CORNFLOWER" padding="none">
      <div className={styles.sectionContainer} >
        <div className={styles.imgContainer}>
          <Image
            height={337}
            width={600}
            className={styles.img}
            src="images/Inspire.jpg"
            alt="placeholder"
          />
        </div>

        <div className={styles.textContainer}>
          <h3 style={{marginTop: "4rem", marginBottom: "2rem"}} className="primary-berry">Newsletter</h3>
          <p className="B1" style={{lineHeight: "170%"}}>
           Let’s stay connected. Subscribe to our newsletter to stay up-to-date on resources and events.
          </p>
          <div className={styles.button}>
                <Button
                variant="secondary_lightBG"
                title="Sign Up"
                href="/pollination-for-mentees"
              />
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}
