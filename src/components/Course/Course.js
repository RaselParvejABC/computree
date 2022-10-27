import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const response = await fetch(
    `${process.env.REACT_APP_compuTreeServer}/course/${params.courseID}`
  );
  const responseBody = await response.json();
  return responseBody;
}

const Course = () => {
  const course = useLoaderData();
  return <div>{course["title"]}</div>;
};

export default Course;
