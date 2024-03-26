import React from "react";

export const FontAwesome = ({ color = "#333", classname = "w-16 h-16" }) => {
  return (
    <svg
    className={classname}
    fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <g
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".3" />
        <path
          fill="none"
          stroke-dasharray="14"
          stroke-dashoffset="14"
          d="M8 12L11 15L16 10"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="14;0"
          />
        </path>
      </g>
    </svg>
  );
};
