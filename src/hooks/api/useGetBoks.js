import axios from "axios";
import { useEffect, useState } from "react";

export const useGetBooksList = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const data = async () => {
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

  useEffect(() => {
    data();
  }, []);

  return { books, data, error };
};
