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
    <div className="container mx-auto p-5 grid grid-cols-3 gap-2">
      <aside className="col-span-3 md:col-span-1 flex gap-2 flex-col">
        <Card>
          <CardHeader>
            <Typography
              variant="h3"
              className="font-bold text-2xl text-center mb-3"
            >
              Our Courses
            </Typography>
          </CardHeader>
          <CardBody>
            {courses.map((course) => (
              <MyNavLink to={`course/${course["id"]}`} key={course["id"]}>
                <Chip
                  className="bg-blue-500 px-3 mt-3"
                  color="blue"
                  value={course["title"]}
                />
              </MyNavLink>
            ))}
          </CardBody>
        </Card>
      </aside>
      <main className="col-span-3 md:col-span-2">
        <Outlet />
      </main>
    </div>
  );
};

export default Courses;
