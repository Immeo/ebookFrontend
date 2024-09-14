import { Link } from "react-router-dom";
import FavoritesIcon from "../../../assets/icons/FavoritesIcon";

function BookCard({ books, error, sumRating, renderStarsIcon }) {
  return (
    <>
      {error ? (
        <p className="text-danger">{error}</p>
      ) : (
        books.map((book) => (
          <div
            key={book.title_books}
            className="group m-5 mx-auto flex max-w-3xl transform flex-wrap bg-slate-200 shadow-lg duration-500 hover:-translate-y-1 md:flex-nowrap"
          >
            <div>
              <img
                src={book.cover_image_path}
                width="200px"
                className="h-full w-full rounded-lg object-cover object-center shadow-lg duration-300 group-hover:scale-110 md:w-52"
                height="200px"
                alt="Обложка книги"
              />
              <button className="relative" type="button">
                <span className="left-3s absolute bottom-56">
                  <FavoritesIcon iconColor={"#000"} size={50} />
                </span>
              </button>
            </div>
            <div className="w-full p-5 pb-10">
              <h2 className="mt-4 text-2xl font-semibold">
                {book.title_books}
              </h2>
              <Link
                to={`/authors/${book.author_books.authors_slug}`}
                className="mt-2 text-lg text-main-color hover:text-hover-main-color"
              >
                {book.author_books.authors_full_name}
              </Link>
              <p className="mt-2 text-2xl">{book.description_books}</p>
              <div className="sm:flex sm:justify-between">
                <div className="flex flex-1 flex-col text-sm">
                  <span className="text-lg">
                    Жанр:{" "}
                    <Link
                      to={`/genres/${book.genre_books.genres_slug}`}
                      className="cursor-pointerd translate-x-1 text-main-color duration-75 hover:text-hover-main-color"
                    >
                      {book.genre_books.genres_name}
                    </Link>
                  </span>
                  <span className="mt-2 text-lg">
                    Издатель:{" "}
                    <Link
                      to={`/publishers/${book.publisher_books.publishers_slug}`}
                      className="cursor-pointer text-main-color duration-75 hover:text-hover-main-color"
                    >
                      {book.publisher_books.publishers_name}
                    </Link>
                  </span>
                  <div className="mt-5 flex items-center justify-between gap-5">
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
                      <Link
                        className="hover:hover-bg-action mt-3 rounded-lg bg-bg-action px-5 py-2 font-bold text-main-color shadow-md duration-100 hover:text-hover-main-color sm:mt-0 md:px-6 md:py-3 md:text-lg"
                        to={`/book/${book.book_slug}`}
                      >
                        О книге
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default BookCard;
