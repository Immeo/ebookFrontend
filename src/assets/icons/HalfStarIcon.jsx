function HalfStarIcon(filledStars) {
  return (
    <svg
      key={filledStars}
      width="20"
      height="21"
      viewBox="0 0 11 11"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="half-fill" x1="0" y1="0" x2="0.5" y2="0">
          <stop offset="0" stopColor="#FFC529" stopOpacity="1" />
          <stop offset="0.5" stopColor="#FFC529" stopOpacity="1" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M8.75095 10.0934L5.58045 8.42735L2.40873 10.0934L3.01588 6.56221L0.447662 4.062L3.99338 3.54714L5.58045 0.285568L7.16752 3.54714L10.7132 4.062L8.14502 6.56343L8.75095 10.0934Z"
        fill="url(#half-fill)"
      />
    </svg>
  );
}
export default HalfStarIcon;
