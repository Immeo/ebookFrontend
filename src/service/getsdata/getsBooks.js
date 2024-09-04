import axios from "axios";
import { PREFIX } from "../../helpering/Api/PREFIX";
export const getBooks = async () => {
  try {
    const response = await axios.get(`${PREFIX}/bookslist`, {
      withCredentials: false,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
