import { Link } from "react-router-dom";
import { useGetData } from "../../hooks/api/useGetData";

function GenreList() {
  const { data, error, isLoadingData } = useGetData("genres");

  console.log(data, error);

  return (
    <div className="container mx-auto flex gap-9 p-10 antialiased md:p-20">
      <h1 className="text-2xl font-bold">Жанры: </h1>
      {error && <div>{error} </div>}
      {isLoadingData && <div className="text-center text-2xl">Загрузка...</div>}
      {data &&
        data.map((item) => (
          <div key={item.genres_id}>
            <Link
              className="translate-x-1 cursor-pointer text-2xl duration-75 [color:var(--main-color)] hover:[color:var(--hover-main-color)]"
              to={`/genres/${item.genres_slug}`}
            >
              {item.genres_name}
            </Link>
          </div>
        ))}
    </div>
  );
}
export default GenreList;
