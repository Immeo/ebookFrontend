import { Link } from "react-router-dom";

function PublishersCard(data) {
  return (
    <>
      {data &&
        data.data.map((item) => (
          <div key={item.publishers_id}>
            <Link
              className="translate-x-1 cursor-pointer text-2xl text-main-color duration-75 hover:text-hover-main-color"
              to={`/publishers/${item.publishers_slug}`}
            >
              {item.publishers_name}
            </Link>
          </div>
        ))}
    </>
  );
}

export default PublishersCard;
