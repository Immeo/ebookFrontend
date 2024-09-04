import axios from "axios";
import { useEffect, useState } from "react";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooksList();
  }, [setBooks]);

  const getBooksList = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const { data } = await axios.get(
        `http://192.168.0.90:8000/api/v1/bookslist/`,
        {
          withCredentials: false,
        },
      );
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div>
      {books.map((book) => (
        <div key={book.books_id}>
          <div>
            <img
              src={book.cover_image_path}
              width="200px"
              height="200px"
              alt="Обложка книги"
            />
          </div>
          <div>
            <h2 className="text-2xl">{book.title_books}</h2>
            <p>{book.author_books}</p>
            <p>{book.genre_books}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
