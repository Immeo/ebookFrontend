import renderStarsIcon from "../../assets/icons/renderStarsIcon;";
import { useGetData } from "../../hooks/api/useGetData";
import BookCard from "./BookCard/BookCard";

function BookList() {
  const { data, error } = useGetData("books");

  const sumRating = (rating) => {
    if (!rating || !rating.length) return 0;
    let sum = 0;
    for (let i = 0; i < rating.length; i++) {
      sum += parseFloat(rating[i].rating);
    }
    return sum / rating.length;
  };

  return (
    <div className="container mx-auto p-10 antialiased md:p-20">
      <BookCard
        books={data}
        sumRating={sumRating}
        renderStarsIcon={renderStarsIcon}
        error={error}
      />
    </div>
  );
}

export default BookList;
