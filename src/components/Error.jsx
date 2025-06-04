import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  // console.log(error, "error");

  return (
    <>
      <h1>Page Not Found</h1>
      <p>
        {error.statusText} {error.status}
      </p>
    </>
  );
};

export default Error;
