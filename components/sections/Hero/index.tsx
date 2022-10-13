// React-Bootstrap imports
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"
import { Button } from "../../elements/Button"
import { SectionWrapper } from "../../layout/SectionWrapper"

import styles from './Hero.module.scss'
// giving SectionWrapper a padding of 'hero' gives it a weird margin
export const Hero = () => {
  return (
    <SectionWrapper padding='' maxWidth={1200}>
      <section>
        <Row className="text-center" id={styles.Hero}>
          <Row xs={1} s={2} md={2} className="align-items-center justify-content-center">
            <Col>
              <div className={styles['hero-left-section']}>
                <h2 className={styles['hero-heading']}>
                  Bee <span className="svg-underline"> supported</span>,
                  <span className="svg-underline"> empowered</span>, <br />
                  and <span className="svg-underline"> connected</span>
                  {/* {data?.testimonials?.data[0].attributes?.title} */}
                </h2>

                <p className={styles['hero-text']}>
                  Our welcoming community helps women and non-binary Swedish immigrants break into tech.
                </p>

                <Button href="https://join.slack.com/t/beela/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ" title="Join Our Slack Community" variant='primary_lightBG' />
              </div>
            </Col>

            <Col sm={{ order: 1 }}>
              <div className={styles['hero-image']}>
              <Image
                src="/images/queenbees.png"
                alt="Illustration of three women, one wearing glasses and a blue shirt, one wearing a shirt with the letter B and a crown, and the other in a polkadot shirt and a hijab."
                fluid
                
              />
              </div>
            </Col>
          </Row>
        </Row>
      </section>
    </SectionWrapper>
  )
}
