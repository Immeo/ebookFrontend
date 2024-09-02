import { axios } from "axios";
import { PREFIX } from "../../helpering/Api/PREFIX";
export const getBooks = async () => {
  const { data } = await axios.get(`${PREFIX}booklist`);
  return data;
};
