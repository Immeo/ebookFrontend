import axios from "axios";
import { useEffect, useState } from "react";
import { PREFIX } from "../../helpering/Api/PREFIX";

export const useGetData = (whatsData) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.get(`${PREFIX}${whatsData}/`, {
        withCredentials: false,
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { getData, data, error };
};
