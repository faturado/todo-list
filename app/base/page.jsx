"use client";

import React from "react";
import Left from "../pan/left";
import Body from "../pan/body";
import Header from "../header/header";
import Divider from "../component/divider";
import App from "../pan/app";

const Page = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <App />
    </div>
  );
};

export default Page;
