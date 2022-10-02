// React-Bootstrap imports
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"
import { Button } from "../elements/Button"

export const Hero = () => {
  return (
    <section id="section-hero">
      <Row className="text-center align-content-center justify-content-center" id="Hero">
        <Row xs={1} s={2} md={2} className="m-4 align-items-center justify-content-center">
          <Col
            xs={{ order: 2 }}
            sm={10}
            md={{ span: 6, order: 1 }}
            lg={6}
            xl={5}
            className="p-5 hero-text-wrapper"
          >
            <h2 className="text-color__berry">
              Bee <span className="svg-underline"> supported</span>,
              <span className="svg-underline"> empowered</span>, and
              <span className="svg-underline"> connected</span>
              {/* {data?.testimonials?.data[0].attributes?.title} */}
            </h2>
            <div className="left-center-text">
              <p className="B1 p-3">
                We offer free resources to help women and non-binary Swedish immigrants start tech
                careers.
              </p>
              <Button
                title="Join Our Slack Community"
                href="https://join.slack.com/t/beela/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ"
              />
            </div>
          </Col>
          <Col sm={{ order: 1 }} md={6} className="p-3">
            <Image
              src="/images/queenbees.png"
              alt="Illustraion of three women, one wearing glasses and a blue shirt, one wearing a shirt with the letter B and a crown, and the other in a polkadot shirt and a hijab."
              fluid
            />
          </Col>
        </Row>
      </Row>
    </section>
  )
}
