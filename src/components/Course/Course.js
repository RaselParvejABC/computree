import React from "react";
import { useLoaderData } from "react-router-dom";
import { Typography, IconButton, Tooltip } from "@material-tailwind/react";
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
    <div>
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
    </div>
  );
};

export default Course;
