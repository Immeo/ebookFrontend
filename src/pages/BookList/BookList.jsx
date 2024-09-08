import axios from "axios";
import { useEffect, useState } from "react";
import renderStarsIcon from "../../assets/icons/renderStarsIcon;";

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
      {error ? (
        <p className="text-danger">{error}</p>
      ) : (
        books.map((book) => (
          <div
            key={book.title_books}
            className="group m-5 mx-auto flex max-w-3xl transform flex-wrap bg-slate-200 shadow-lg duration-500 hover:-translate-y-1 md:flex-nowrap"
          >
            <img
              src={book.cover_image_path}
              width="200px"
              className="max-h-[400px] w-full object-cover md:w-52"
              height="200px"
              alt="Обложка книги"
            />
            <div className="p-5 pb-10">
              <h2 className="mt-4 text-2xl font-semibold [color:var(--text-color)]">
                {book.title_books}
              </h2>
              <p className="mt-2 leading-relaxed [color:var(--text-color)]">
                {book.description_books}
              </p>
              <div className="sm:flex sm:justify-between">
                <div className="flex flex-1 flex-col text-sm">
                  <div>Жанр: {book.genre_books}</div>
                  <div>Издатель: {book.publisher_books}</div>
                  <div className="mt-5 flex items-center gap-5">
                    {book.rate && book.rate.length > 0 ? (
                      <div>
                        <span className="flex gap-2">
                          Рейтинг:
                          {renderStarsIcon(sumRating(book.rate))}
                        </span>
                      </div>
                    ) : (
                      <span>Рейтинг не указан</span>
                    )}
                    <div className="items-end">
                      <button className="mt-3 rounded-lg bg-purple-700 px-5 py-2 font-bold text-white shadow-md hover:bg-purple-600 sm:mt-0 md:px-6 md:py-3 md:text-lg">
                        Book Ticket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default BookList;
