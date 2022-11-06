import Container from "react-bootstrap/Container"
import Accordion from "react-bootstrap/Accordion"

import { SectionWrapper } from "../../layout/SectionWrapper"
import styles from "./FAQ.module.scss"

export default function FAQ({ color = "SECONDARY_CREAM", data, pollination = false, title }) {
  return (
    <div>
      {data && (
        <SectionWrapper color={color}>
          <h3 className={`primary-berry ${pollination ? styles.pollinationFaq : ""}`}>{title}</h3>
          <Accordion defaultActiveKey="0">
            {data.map((faq, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header className="p-0">
                  <div className={`h5 primary-berry ${styles.question}`}>{faq.question}</div>
                </Accordion.Header>
                <Accordion.Body className={`B2 ${styles.answer}`}>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </SectionWrapper>
      )}
    </div>
  )
}
