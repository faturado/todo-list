import React from "react";

import Base from "./base/page";
import Add from "./component/add_button";
import Pan1 from "./pan/left";
import Pan2 from "./pan/body";
import Login from "./login/login";
import Sky from "./bg/sky";

const Page = () => {
  return (
    <div>
      <Base />
    </div>
    // <div className="h-screen w-full bg-black flex justify-center items-center">
    //   <Sky numberOfStars={200} />
    //   <Base />
    //   {/* <Login /> */}
    // </div>
  );
};

export default Page;
