import { useState } from "react"
import Image from "next/image"
import axios from "axios"
import { Container, Row, Col } from "react-bootstrap"
import { Button } from "../../elements/Button"
import { SectionWrapper } from "../SectionWrapper"
import styles from "./CommunityLayout.module.scss"
import arrowright from "../../../public/icons/arrow-right.svg"

function CommunityLayout({
  altText,
  blueTitle = false,
  button = false,
  buttonTitle = "",
  color,
  href = "",
  icons = false,
  imgSource,
  newsletter = false,
  sectionTitle,
  text,
  reverse = false,
}) {
  const [email, setEmail] = useState("")
  const [state, setState] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)

  const subscribe = async () => {
    setState("LOADING")
    setErrorMessage(null)

    try {
      const response = await axios.post("/api/newsletter", { email })
      setState("SUCCESS")
      setEmail("")
    } catch (e) {
      setErrorMessage(e.response.data.error)
      setState("ERROR")
    }
  }

  return (
    <SectionWrapper
      color={color}
      padding="none"
      className={
        reverse ? `${styles.reverseSectionWrapper} mw-100` : `${styles.sectionWrapper} mw-100`
      }
    >
      <Container fluid className={`p-0 ${styles.outerContainer}`}>
        <Row className={reverse ? styles.reverseSectionContainer : styles.sectionContainer}>
          <Col sm={6} className={`${styles.imageContainer} p-0`}>
            <Image
              className={styles.image}
              height={324}
              width={592}
              layout="intrinsic"
              src={imgSource}
              alt={altText}
            />
          </Col>
          <Col className={styles.textContainer}>
            <h3 className={`mb-3 ${styles.sectionHeading} ${blueTitle ? "primary-berry" : ""}`}>
              {sectionTitle}
            </h3>
            <p className="B1">{text}</p>
            {button && (
              <Button
                className={styles.button}
                variant="secondary_lightBG"
                title={buttonTitle}
                href={href}
              />
            )}
            {newsletter && (
              <div className={styles.newsletterContainer}>
                <h4 className={`primary-berry ${styles.newslatterCta}`}>
                  Sign Up for Beelas Newsletter
                </h4>
                <div className="input-group">
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={`B2 ${styles.input}`}
                    placeholder="Enter your email here"
                    aria-label="Email field to sign up for Beela's newsletter"
                    aria-describedby="basic-addon2"
                  />
                  <button
                    type="button"
                    className={styles.arrowRight}
                    disabled={state == "LOADING"}
                    onClick={subscribe}
                  >
                    <Image
                      alt="Arrow pointing right that acts as a submit button for newsletter sign up"
                      src={arrowright}
                      width={20}
                      height={24}
                    />
                  </button>
                  <br />
                </div>
                {state == "ERROR" && (
                  <p className={`B2 ${styles.emailValidation}`}>
                    Please enter a valid email address
                  </p>
                )}
                {state == "SUCCESS" && (
                  <p className={`B2 ${styles.emailValidation}`}>You are now subscribed!</p>
                )}
              </div>
            )}
            {icons && (
              <div className={styles.iconsWrapper}>
                <a
                  href="https://open.spotify.com/show/1B1xgKaplQwslW05BoRDmX?si=aa23a69ce1174786"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/icons/spotify.svg"
                    className=""
                    height={43}
                    width={43}
                    alt="Icon for Spotify"
                  />
                </a>
                <a
                  href="https://podcasts.apple.com/us/podcast/beelas-talk/id1624447735"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/icons/podcast-apple.svg"
                    className=""
                    height={43}
                    width={43}
                    alt="Icon for Apple Podcasts, an icon of a person with two semi circles above them"
                  />
                </a>
                <a
                  href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81YTE1NDIwOC9wb2RjYXN0L3Jzcw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/icons/podcast-google.svg"
                    className=""
                    height={43}
                    width={43}
                    alt="Icon for Google Podcasts, an row of five divided lines in a diamond shape"
                  />
                </a>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  )
}

export default CommunityLayout
