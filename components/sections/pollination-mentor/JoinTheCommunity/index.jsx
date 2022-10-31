import { Container, Row, Col } from "react-bootstrap"
import Image from "next/image"

import styles from "./JoinTheCommunity.module.scss"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import { Button } from "../../../elements/Button"

function ExpectCards() {
  return (
    <SectionWrapper maxWidth={782}>
      <div className={styles.sectionContainer}>
        <div className={styles.imageContainer}>
          <Image
            alt="Beela's logo - an illustration of a bee inside of a yellow hexagon with the words 'guiding immigrant women and non-binary people into tech' written around the hexagon"
            src="icons/logo-secondary.svg"
            width={200}
            height={200}
            layout="intrinsic"
          />
        </div>
        <div className={styles.contentContainer}>
          <h2 className={`primary-berry  ${styles.heading}`}>Join the community</h2>
          <p className="B1">
            Ask questions, network, and stay up-to-date about upcoming events. We’re an inclusive
            bunch and we’d love to have you!
          </p>
          <p className="B1">
            Our Slack community has special channels just for mentors to connect, network, or take a
            fika with other Beela members.
          </p>
          <Button
            title="Join Slack"
            variant="secondary_lightBG"
            href="https://beela.slack.com/join/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ#/shared-invite/email"
            className="mx-auto"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ExpectCards
