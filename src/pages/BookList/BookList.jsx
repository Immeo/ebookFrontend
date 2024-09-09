import axios from "axios";
import { useEffect, useState } from "react";
import renderStarsIcon from "../../assets/icons/renderStarsIcon;";
import BookCard from "./BookCard/BookCard";

function BookList() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBooksList();
  }, []); // Убрать setBooks из зависимостей

  const getBooksList = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.get(
        `http://192.168.0.90:8000/api/v1/bookslist/`,
        {
          withCredentials: false,
        },
      );
      console.log(response);
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
      setError(error.message);
    }
  };

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
