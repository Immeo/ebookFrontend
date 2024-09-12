export const sumRating = (rating) => {
  if (!rating || !rating.length) return 0;
  let sum = 0;
  for (let i = 0; i < rating.length; i++) {
    sum += parseFloat(rating[i].rating);
  }
  return sum / rating.length;
};
