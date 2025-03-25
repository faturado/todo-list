import React from "react";
import Left from "../pan/left";
import Body from "../pan/body";
import Header from "../header/header";
import Divider from "../component/divider";

const Page = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="w-full flex items-start justify-end">
        <Header />
      </div>
      {/* Center Body */}
      <div className="flex flex-1 items-center justify-center m-3 mb-10">
        <Body />
      </div>
    </div>
  );
};

export default Page;
