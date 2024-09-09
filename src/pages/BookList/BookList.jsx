import renderStarsIcon from "../../assets/icons/renderStarsIcon;";
import { useGetBooksList } from "../../hooks/api/useGetBoks";
import BookCard from "./BookCard/BookCard";

function BookList() {
  const { books, error } = useGetBooksList();

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
        books={books}
        sumRating={sumRating}
        renderStarsIcon={renderStarsIcon}
        error={error}
      />
    </div>
  );
}

export default BookList;
