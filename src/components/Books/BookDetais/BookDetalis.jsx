import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../../../hooks/api/useGetData";
import BookDetalisCard from "./BookDetalisCard/BookDetalisCard";

function BookDetalis() {
  const [bookRead, setBookRead] = useState(null);
  const [isFrameOpen, setIsFrameOpen] = useState(false);
  const { slug } = useParams();
  const { data, error, isLoadingData } = useGetData(`books/${slug}`);

  const onDowload = (link) => {
    window.open(link, "_blank");
  };

  const onRead = () => {
    setIsFrameOpen(!isFrameOpen);
    const filePath = data.link_to_file;
    setBookRead(filePath);
  };

  return (
    <div className="mx-auto max-w-6xl py-8">
      <BookDetalisCard
        data={data}
        isLoadingData={isLoadingData}
        error={error}
        onDowload={onDowload}
        onRead={onRead}
      />
      <div className={`${isFrameOpen ? "block" : "hidden"} px-4 md:flex-1`}>
        <iframe width="100%" height="700px" src={bookRead}></iframe>
      </div>
    </div>
  );
}
export default BookDetalis;
