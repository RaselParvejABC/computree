import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Typography,
  IconButton,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { MdPictureAsPdf } from "react-icons/md";

export async function loader({ params }) {
  const response = await fetch(
    `${process.env.REACT_APP_compuTreeServer}/course/${params.courseID}`
  );
  const responseBody = await response.json();
  return responseBody;
}

const Course = () => {
  const course = useLoaderData();
  return (
    <div className="p-5">
      <Typography
        as="h2"
        className="bg-white text-black text-2xl mx-auto mt-5 text-center font-bold"
      >
        {course["title"] + " "}
        <Tooltip
          content="Download Course Description as PDF"
          className="bg-blue-500"
        >
          <IconButton>
            <MdPictureAsPdf />
          </IconButton>
        </Tooltip>
      </Typography>
      <img
        src={course["banner"]}
        alt="Course Banner"
        className="max-h-[200px] my-3 block mx-auto"
      />
      {course["preamble"].map((paragraph) => (
        <Typography as="p" variant="paragraph" className="justify-self-start">
          {paragraph}
        </Typography>
      ))}
      <div className="text-center">
        <Button className="mt-3 p-3 mx-auto">Purchase this Course</Button>
      </div>
    </div>
  );
};

export default Course;
