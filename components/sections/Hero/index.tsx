// React-Bootstrap imports
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"
import { Button } from "../../elements/Button"
import { SectionWrapper } from "../../layout/SectionWrapper"

export const Hero = () => {
  return (
    <SectionWrapper>
      <Col
        xs={{ order: 2 }}
        sm={10}
        md={{ span: 6, order: 1 }}
        lg={6}
        xl={5}
        className="p-5 hero-text-wrapper"
      >
        <div className="hero-left-section">
          <h2 className="hero-heading">
            Bee <span className="svg-underline"> supported</span>,
            <span className="svg-underline"> empowered</span>, <br />
            and <span className="svg-underline"> connected</span>
            {/* {data?.testimonials?.data[0].attributes?.title} */}
          </h2>

          <p className="hero-text">
            Our welcoming community helps women and non-binary Swedish immigrants break into tech.
          </p>
          <button className="hero-button">
            <a href="https://join.slack.com/t/beela/shared_invite/zt-12kargaye-5R2bP0qwqNpFwPiiDAiwQQ">Join Our Slack Community</a>
          </button>
        </div>
      </Col>

      <Col sm={{ order: 1 }} md={6} className="p-3">
        <div className="hero-image">
          <Image
            src="/images/queenbees.png"
            alt="Illustraion of three women, one wearing glasses and a blue shirt, one wearing a shirt with the letter B and a crown, and the other in a polkadot shirt and a hijab."
            fluid
          />
        </div>
      </Col>
    </SectionWrapper>

  )
}
