import { Link, useParams } from "react-router-dom";
import renderStarsIcon from "../../../assets/icons/renderStarsIcon;";
import { sumRating } from "../../../helpering/HelpingFuncion/sumRating";
import { useGetData } from "../../../hooks/api/useGetData";

function BookDetalis() {
  const { slug } = useParams();
  const { data, error, isLoadingData } = useGetData(`books/${slug}`);

  return (
    <div className="mx-auto max-w-6xl py-8">
      {isLoadingData && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoadingData && data && (
        <div className="-mx-4 flex flex-col md:flex-row">
          <div className="gap-22 flex justify-around">
            <div className="px-4 md:flex-1">
              <div className="h-[460px] rounded-lg">
                <img
                  className="h-full w-full object-cover"
                  src={data.cover_image_path}
                  alt={`Обложка книги ${data.title_books}`}
                />
              </div>
              <div className="-mx-2 mb-4 flex">
                <div className="w-1/2 px-2">
                  <button className="w-full translate-y-1 rounded-lg bg-bg-action px-5 py-2.5 text-sm font-medium text-main-color hover:bg-hover-bg-action hover:text-hover-main-color focus:outline-none focus:ring">
                    Читать
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full translate-y-1 rounded-lg bg-main-color px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-hover-main-color focus:outline-none focus:ring">
                    Скачать
                  </button>
                </div>
              </div>
            </div>
            <div className="px-4 md:flex-1">
              <div className="flex flex-col gap-6">
                <h2 className="text-text-color text-3xl font-bold">
                  {data.title_books}
                </h2>
                <div>
                  <p className="text-text-color text-2xl">
                    {data.publication_date}
                  </p>
                </div>
                <span className="text-text-color text-2xl font-bold">
                  Автор:{" "}
                  <Link
                    className="translate-x-1 cursor-pointer text-2xl text-main-color duration-75 hover:text-hover-main-color"
                    to={`/authors/${data.author_books && data.author_books.authors_slug}`}
                  >
                    {data.author_books && data.author_books.authors_full_name}
                  </Link>
                </span>
                <span className="text-text-color text-2xl font-bold">
                  Жанр:{" "}
                  <Link
                    className="translate-x-1 cursor-pointer text-2xl text-main-color duration-75 hover:text-hover-main-color"
                    to={`/genres/${data.genre_books && data.genre_books.genres_slug}`}
                  >
                    {data.genre_books && data.genre_books.genres_name}
                  </Link>
                </span>
                <span className="text-text-color text-2xl font-bold">
                  Издатель:{" "}
                  <Link
                    className="translate-x-1 cursor-pointer text-2xl text-main-color duration-75 hover:text-hover-main-color"
                    to={
                      data.publisher_books &&
                      data.publisher_books.publishers_slug
                    }
                  >
                    {data.publisher_books &&
                      data.publisher_books.publishers_name}{" "}
                  </Link>
                </span>

                {data.rate && data.rate.length > 0 ? (
                  <div>
                    <span className="flex gap-2 text-2xl font-bold">
                      Рейтинг:
                      {renderStarsIcon(sumRating(data.rate))}
                    </span>
                  </div>
                ) : (
                  <span>Рейтинг не указан</span>
                )}
                <div>
                  <p className="text-text-color text-2xl font-bold">
                    Описание:
                  </p>
                  <p className="text-text-color text-2xl">
                    {data.description_books}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default BookDetalis;
