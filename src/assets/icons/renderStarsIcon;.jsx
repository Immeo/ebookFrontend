const renderStarsIcon = (rating) => {
  const maxStars = 5;
  const filledStars = Math.floor(rating);
  const halfStars = rating - filledStars >= 0.5 ? 1 : 0;
  const emptyStars = maxStars - filledStars - halfStars;

  return (
    <div className="flex">
      {[...Array(filledStars)].map((_, index) => (
        <svg
          key={index}
          className="filled"
          width="20"
          height="21"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.75095 10.0934L5.58045 8.42735L2.40873 10.0934L3.01588 6.56221L0.447662 4.062L3.99338 3.54714L5.58045 0.285568L7.16752 3.54714L10.7132 4.062L8.14502 6.56343L8.75095 10.0934Z"
            fill="#FFC529"
          />
        </svg>
      ))}
      {halfStars > 0 && (
        <svg
          width="20"
          height="21"
          viewBox="0 0 11 11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.75095 10.0934L5.58045 8.42735L2.40873 10.0934L3.01588 6.56221L0.447662 4.062L3.99338 3.54714L5.58045 0.285568L7.16752 3.54714L10.7132 4.062L8.14502 6.56343L8.75095 10.0934Z"
            fill="none"
            stroke="#FFC529"
            strokeWidth="1"
          />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={index}
          width="20"
          height="21"
          viewBox="0 0 11 11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.75095 10.0934L5.58045 8.42735L2.40873 10.0934L3.01588 6.56221L0.447662 4.062L3.99338 3.54714L5.58045 0.285568L7.16752 3.54714L10.7132 4.062L8.14502 6.56343L8.75095 10.0934Z"
            fill="none"
            stroke="#FFC529"
            strokeWidth="1"
          />
        </svg>
      ))}
    </div>
  );
};
export default renderStarsIcon;
