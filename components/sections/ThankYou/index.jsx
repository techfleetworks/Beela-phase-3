import React from "react"
import Image from "next/image"

import styles from "./ThankYouMessage.module.scss"
import { Button } from "../../elements/Button"

function ThankYouMessage(props) {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.imageContainer}>
        <Image
          //   sizes="100vw"
          layout="fill"
          quality={100}
          objectFit="cover"
          objectPosition="center"
          src="/images/thank-you.jpg"
          alt="Three women sitting on a couch together, one is holding a laptop and the other two are holding papers. They are all looking at the same piece of paper."
        />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.contentContainer}>
          <h4 className="text-center primary-berry">
            <span className="svg-underline">Thank you</span> for your generous donation!
          </h4>
          <p className={`B2 primary-berry ${styles.text}`}>
            Your donation has been successfully processed. A confirmation receipt has been sent to
            your email address. Please save this receipt for your records.
          </p>
          <div className={styles.button}>
            <Button title="Back To Home" href="/" variant="primary_darkBG" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYouMessage
