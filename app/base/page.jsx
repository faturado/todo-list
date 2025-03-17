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

      {/* <div className="w-[300px] bg-black_bg1 rounded-md  my-1"></div>
      <div className="flex-1 bg-black_bg1 border-2 border-black_bord1 ml-2 mr-2 rounded-4xl my-3"></div> */}
    </div>
  );
};

export default Page;
