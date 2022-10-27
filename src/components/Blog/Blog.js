import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
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
          <Typography variant="paragraph">
            By default, a server with an origin (collective name for protocol,
            host and port) does not serve resources on request from client with
            a different origin.
          </Typography>
          <Typography variant="paragraph">
            With CORS Policy, a server can indicate if it will serve on requests
            from different origin clients or not, if every other different
            origin client or just some.
          </Typography>
        </AccordionBody>
      </Accordion>
      <Accordion open={openAccordionIndex === 2}>
        <AccordionHeader onClick={() => setOpenAccordionIndex(2)}>
          Why are we using Firebase for Authentication? What other options do we
          have regarding Authentication?
        </AccordionHeader>
        <AccordionBody>
          <Typography variant="paragraph">
            Firebase is a BaaS (Backend as a Service). That means, we use
            Firebase Services,we have to neither build nor manage a Backend on
            our own, which becomes so significant a benefit when services like
            User Authentication, Database and Push Notifications considered.
          </Typography>
          <Typography variant="paragraph">
            Regarding User Authentication, Firebase handles all the complex
            stuffs like Password Reset, Email Confirmation etc. Just to think
            about implementing those on my own is such a difficult task!!
          </Typography>
          <Typography variant="paragraph">
            There two broad options against Firebase regarding User
            Authentication. First, similar services like Firebase, such as
            Supabase. Secondly, again, building our own backend! Agh!
          </Typography>
        </AccordionBody>
      </Accordion>
      <Accordion open={openAccordionIndex === 3}>
        <AccordionHeader onClick={() => setOpenAccordionIndex(3)}>
          How does Private Route works?
        </AccordionHeader>
        <AccordionBody>
          <Typography variant="paragraph">
            A Private Routes encapsulates a Component that requires User
            Authentication.
          </Typography>
          <Typography variant="paragraph">
            A route is Private means its topmost component checks if the user is
            authenticated and authorized to see this route. If not
            authenticated, first the topmost container tries to get the user
            authenticated.
          </Typography>
          <Typography variant="paragraph">
            If the user returns authenticated, then the topmost container checks
            if the user is authorized to view the route. Only if authorized, the
            topmost container renders its subtree, otherwise not.
          </Typography>
        </AccordionBody>
      </Accordion>
      <Accordion open={openAccordionIndex === 4}>
        <AccordionHeader onClick={() => setOpenAccordionIndex(4)}>
          What is Node? How does Node work?
        </AccordionHeader>
        <AccordionBody>
          <Typography variant="paragraph">
            Node is a Javascript Runtime to run Javascipt outside Browser
            Environment.
          </Typography>
          <Typography variant="paragraph">
            Node works in asynchronous nature and driven by events. Its
            operations are non-blocking. It does not block the main thread by
            waiting for some work to complete first. Rather, registering a
            callback to its completion event, it proceed to the next task.
            That's why node is great for I/O intensive Applications.
          </Typography>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default Blog;
