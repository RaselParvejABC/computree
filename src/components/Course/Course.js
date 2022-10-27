import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  Typography,
  IconButton,
  Tooltip,
  Button,
  Alert,
} from "@material-tailwind/react";
import { MdPictureAsPdf, MdDownload } from "react-icons/md";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CourseAsPDF from "../CourseAsPDF/CourseAsPDF";
import { SpinnerRoundFilled } from "spinners-react";

export async function loader({ params }) {
  const response = await fetch(
    `${process.env.REACT_APP_compuTreeServer}/course/${params.courseID}`
  );
  const responseBody = await response.json();
  return responseBody;
}

const Course = () => {
  const course = useLoaderData();
  const [isDownloadingPDF, setIsDownloadingPDF] = useState(false);
  return (
    <div className="p-5">
      <Typography
        as="h2"
        className="bg-white text-black text-2xl mx-auto mt-5 text-center font-bold"
      >
        {course["title"] + " "}
        {isDownloadingPDF || (
          <Tooltip
            content="Download Course Description as PDF"
            className="bg-blue-500"
          >
            <IconButton onClick={() => setIsDownloadingPDF(true)}>
              <MdPictureAsPdf />
            </IconButton>
          </Tooltip>
        )}

        {isDownloadingPDF && (
          <PDFDownloadLink
            document={<CourseAsPDF course={course} />}
            fileName={course["title"]}
          >
            {({ blob, url, loading, error }) => {
              if (error) {
                return (
                  <Alert className="bg-red-900 text-white inline-block font-normal text-sm">
                    Something went wrong! Reload!
                  </Alert>
                );
              }
              if (loading) {
                return <SpinnerRoundFilled size="50" className="inline" />;
              }
              return <MdDownload className="inline text-blue-900" />;
            }}
          </PDFDownloadLink>
        )}
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
