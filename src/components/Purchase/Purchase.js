import React from "react";

const Purchase = ({ course }) => {
  return (
    <div className="container mx-auto p-5">
      You are purchasing the course Titled "{course["title"]}"
    </div>
  );
};

export default Purchase;
