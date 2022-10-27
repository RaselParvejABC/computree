import React from "react";
import { useLoaderData, Outlet } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";
import MyNavLink from "../MyNavBar/MyNavLink";

export async function loader() {
  const response = await fetch(
    `${process.env.REACT_APP_compuTreeServer}/courses`
  );
  const responseBody = await response.json();
  return responseBody;
}

const Courses = () => {
  const courses = useLoaderData();
  return (
    <>
      <Typography variant="h3" className="font-bold text-2xl text-center mb-3">
        Our Courses
      </Typography>
      <div className="container mx-auto p-5 grid grid-cols-3 gap-3">
        <Card className="col-span-3 md:col-span-1">
          <CardBody>
            <aside className="flex gap-1 flex-col">
              {courses.map((course) => (
                <MyNavLink to={`course/${course["id"]}`} key={course["id"]}>
                  <Chip
                    className="bg-blue-500 px-3 mb-3"
                    color="blue"
                    value={course["title"]}
                  />
                </MyNavLink>
              ))}
            </aside>
          </CardBody>
        </Card>
        <main className="col-span-3 md:col-span-2 border-2 border-blue-500/100 rounded-lg">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Courses;
