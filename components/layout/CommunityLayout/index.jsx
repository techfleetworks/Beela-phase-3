import Image from "next/image"
import { Container, Row, Col } from "react-bootstrap"
import { Button } from "../../elements/Button"
import { SectionWrapper } from "../SectionWrapper"
import styles from "./CommunityLayout.module.scss"

function CommunityLayout({
  altText,
  buttonTitle,
  color,
  href,
  imgSource,
  sectionTitle,
  text,
  reverse,
}) {
  return (
    <SectionWrapper color={color} padding="none" className={`mw-100 ${styles.sectionWrapper}`}>
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
            <h3 className={`mb-3 ${styles.sectionHeading}`}>{sectionTitle}</h3>
            <p className="B1">{text}</p>
            <Button
              className={styles.button}
              variant="secondary_lightBG"
              title={buttonTitle}
              href={href}
            />
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  )
}

export default CommunityLayout
