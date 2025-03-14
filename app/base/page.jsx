import React from "react";

const Page = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left column with fixed width */}
      <div className="w-[300px] bg-[rgba(21,21,23,255)] rounded-md  my-1"></div>

      {/* Right column taking remaining space */}
      <div className="flex-1 bg-[rgba(21,21,23,255)] border-2 border-[rgba(27,27,29,255)] ml-2 rounded-4xl my-1"></div>
    </div>
  );
};

export default Page;
