import React from "react";

import Base from "./base/page";
import Add from "./component/add_button";
import Pan1 from "./pan/left";
import Pan2 from "./pan/right";
import Login from "./login/login";
import Sky from "./bg/sky";

const Page = () => {
  return (
    <div className="h-screen w-full bg-black">
      <Sky numberOfStars={100} />
    </div>
  );
};

export default Page;
