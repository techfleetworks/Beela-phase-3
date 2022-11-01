import React from 'react';
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import { SectionWrapper } from "../layout/SectionWrapper";
import styles from "./faqs.module.scss"

export default function FAQ ({data, title}) {
 
  return (
    <div>
    {data && (
      <SectionWrapper color="SECONDARY_CREAM" >
      <Container fluid className="py-5">
       <Container>
        <h3 className={styles.title}>{title}</h3>
        <Accordion defaultActiveKey="0" className="my-5">
        {data.map((faq, id) => (
          <Accordion.Item eventKey={id} key={id}>
            <Accordion.Header >
            <span className={styles.questions} >
               {faq.question}</span>
            </Accordion.Header>
            <Accordion.Body className="B1">
              {faq.answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
     </Container>
    </Container>
    </SectionWrapper>
    )}

  </div>
  )
}