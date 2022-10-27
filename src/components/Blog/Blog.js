import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Blog = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(1);

  return (
    <div className="container mx-auto p-5">
      <Accordion open={openAccordionIndex === 1}>
        <AccordionHeader onClick={() => setOpenAccordionIndex(1)}>
          What is CORS?
        </AccordionHeader>
        <AccordionBody>
          By default, a server with an origin (collective name for protocol,
          host and port) does not serve resources on request from client with a
          different origin. With CORS Policy, a server can indicate if it will
          serve on requests from different origin clients or not, if every other
          different origin client or just some.
        </AccordionBody>
      </Accordion>
      <Accordion open={openAccordionIndex === 2}>
        <AccordionHeader onClick={() => setOpenAccordionIndex(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={openAccordionIndex === 3}>
        <AccordionHeader onClick={() => setOpenAccordionIndex(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={openAccordionIndex === 4}>
        <AccordionHeader onClick={() => setOpenAccordionIndex(4)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default Blog;
