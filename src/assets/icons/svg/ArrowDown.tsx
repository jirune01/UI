import React from "react";

interface ArrowDownProps {
  size?: number;
  color?: string;
}

export const ArrowDown: React.FC<ArrowDownProps> = ({
  size = 32,
  color = "#ccc",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
    >
      <rect width="100" height="100" rx="8" ry="8" fill="transparent" />
      <path
        d="M30 40 L50 60 L70 40"
        fill="none"
        stroke={color}
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
