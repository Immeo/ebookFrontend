import React from "react";

const FavoritesIcon = ({ iconColor = "#000", size = 44 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 70 70"
      id="favorite"
      fill={iconColor}
    >
      <path fill="none" d="M0 0h48v48H0z"></path>
      <path d="m24 42.7-2.9-2.63C10.8 30.72 4 24.55 4 17 4 10.83 8.83 6 15 6c3.48 0 6.82 1.62 9 4.17C26.18 7.62 29.52 6 33 6c6.17 0 11 4.83 11 11 0 7.55-6.8 13.72-17.1 23.07L24 42.7z"></path>
    </svg>
  );
};

export default FavoritesIcon;
