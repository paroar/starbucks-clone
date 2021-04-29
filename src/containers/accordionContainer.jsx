import React from 'react';
import Accordion from '../components/accordion';
import accordionData from '../fixtures/accordion';

const AccordionContainer = () => (
  <Accordion>
    {accordionData.map((item) => (
      <Accordion.Item>
        <Accordion.Header>{item.header}</Accordion.Header>
        <Accordion.Body>
          {item.body.map((body) => (
            <Accordion.ButtonLink>
              {body.data}
            </Accordion.ButtonLink>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
);

export default AccordionContainer;
