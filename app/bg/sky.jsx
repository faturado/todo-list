import React from "react";
import ShootingStar from "./shootingStar";

const Sky = ({ numberOfStars }) => {
  const stars = Array.from({ length: numberOfStars }).map((_, index) => {
    const top = Math.random() * 100; // Generates a random top position (0-100%)
    const left = Math.random() * 100; // Generates a random left position (0-100%)

    return (
      <div
        key={index}
        className="absolute size-px rounded-full bg-white"
        style={{
          top: `${top}%`,
          left: `${left}%`,
        }}
      />
    );
  });

  return (
    <div className="relative h-full w-full">
      {stars}
      <ShootingStar />
    </div>
  );
};

export default Sky;
