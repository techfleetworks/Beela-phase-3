import Image from "next/image"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styles from "./Events.module.scss"

import { SectionWrapper } from "../../../layout/SectionWrapper"
import { Button } from "../../../elements/Button"

function Events() {
  return (
    <SectionWrapper>
      <div className={styles.contentContainer}>
        <div className={styles.image}>
          <Image
            height={460}
            width={460}
            layout="intrinsic"
            src="/images/events.jpg"
            alt="Six hands stacked one on top of the other over top of a desk"
          />
        </div>

        <div className={styles.textContainer}>
          <h2 className={`primary-berry ${styles.heading}`}>Events</h2>
          <h3 className={`primary-berry ${styles.subHeading}`}>See what&apos;s going on!</h3>
          <p className="B1">
            Beela Events are an easy way to find out what your tech career in Sweden could look
            like. You can find and join communities of migrant and non-binary people like you,
            network with industry professionals, and learn new skills.
          </p>
          <div className={styles.button}>
            <Button title="View Events" href="" variant="primary_darkBG" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Events
