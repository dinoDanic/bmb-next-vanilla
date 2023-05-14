"use client";

import React from "react";

const ErrorPage = (props: { error?: Error }) => {
  console.log("err props", props);
  return <div>{props.error?.message}</div>;
};

export default ErrorPage;
