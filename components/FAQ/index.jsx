import React from 'react';
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import { SectionWrapper } from "../layout/SectionWrapper";

export default function FAQ ({data, title}) {
 
  return (
    <div>
    {data && (
      <SectionWrapper color="SECONDARY_CREAM" >
      <Container fluid className="py-5">
       <Container>
        <h3 className="no_name_37 text-center">{title}</h3>
        <Accordion defaultActiveKey="0" className="my-5">
        {data.map((faq, id) => (
          <Accordion.Item eventKey={id} key={id}>
            <Accordion.Header className="mb-0 no_name_37">
            <span className='primary-berry' 
               style={{fontWeight: "600", fontSize: "18px", fontFamily: "Montserrat"}}>
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