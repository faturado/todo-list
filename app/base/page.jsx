import React from "react";
import Left from "../pan/left";
import Right from "../pan/right";
import Header from "../header/header";
import Divider from "../component/divider";

const Page = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-[300px] flex flex-col">
        <Header />
        <Divider />
        <Left />
      </div>
      <div className="flex-1">
        <Right />
      </div>
    </div>
  );
};

export default Page;
