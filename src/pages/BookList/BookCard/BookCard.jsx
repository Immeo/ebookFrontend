import { Link } from "react-router-dom";

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
            </div>
            <div className="w-full p-5 pb-10">
              <h2 className="mt-4 text-2xl font-semibold [color:var(--text-color)]">
                {book.title_books}
              </h2>
              <p className="mt-2 leading-relaxed [color:var(--text-color)]">
                {book.description_books}
              </p>
              <div className="sm:flex sm:justify-between">
                <div className="flex flex-1 flex-col text-sm">
                  <div>Жанр: {book.genre_books.genres_name}</div>
                  <div>Издатель: {book.publisher_books}</div>
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
                        className="hover:hover-bg-action mt-3 rounded-lg bg-bg-action px-5 py-2 font-bold shadow-md [color:var(--main-color)] sm:mt-0 md:px-6 md:py-3 md:text-lg"
                        to={`/book/${book.id}`}
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
