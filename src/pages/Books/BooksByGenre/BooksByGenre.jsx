import { useParams } from "react-router-dom";
import renderStarsIcon from "../../../assets/icons/renderStarsIcon;";
import { sumRating } from "../../../helpering/HelpingFuncion/sumRating";
import { useGetData } from "../../../hooks/api/useGetData";
import BookCard from "../../Books/BookCard/BookCard";

function BooksByGenre() {
  const { slug } = useParams();
  const { data, error, isLoadingData } = useGetData(`genres/${slug}/books`);

  console.log(data);

  return (
    <div className="container mx-auto p-10 antialiased md:p-20">
      {isLoadingData && <div className="text-center text-2xl">Загрузка...</div>}
      {error && <div className="text-center text-2xl">{error}</div>}
      {data && (
        <BookCard
          books={data}
          sumRating={sumRating}
          renderStarsIcon={renderStarsIcon}
          error={error}
        />
      )}
    </div>
  );
}
export default BooksByGenre;
