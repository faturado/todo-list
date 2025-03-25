"use client";

import React, { useState, useEffect } from "react";

const ShootingStar = () => {
  const [position, setPosition] = useState({ top: "40%", left: "10%" });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const shootStar = () => {
      setIsVisible(false); // Hide previous star
      setTimeout(() => {
        const top = Math.random() * 50; // Avoid full-screen overlap
        const left = Math.random() * 50; // Prevent stars from spawning over each other

        setPosition({ top: `${top}%`, left: `${left}%` });
        setIsVisible(true);

        setTimeout(() => {
          setIsVisible(false);
        }, 1000); // Star disappears after 1 second
      }, 500); // Small delay before spawning the next
    };

    const interval = setInterval(shootStar, 3000); // Star appears every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {isVisible && (
        <svg
          width="67"
          height="68"
          viewBox="0 0 67 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
          }}
          className="z-10 animate-shooting"
        >
          <g filter="url(#filter0_f_928_3155)">
            <circle cx="8" cy="8" r="2" fill="white" fillOpacity="1" />
          </g>
          <path
            d="M8 8 L67 67" // Path ensures a natural downward-right movement
            stroke="url(#paint0_linear_928_3155)"
            strokeOpacity="1"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
          <defs>
            <filter
              id="filter0_f_928_3155"
              x="0"
              y="0"
              width="16"
              height="16"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="3"
                result="effect1_foregroundBlur_928_3155"
              />
            </filter>
            <linearGradient
              id="paint0_linear_928_3155"
              x1="8"
              y1="8"
              x2="67"
              y2="67"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#1D1D20" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default ShootingStar;
