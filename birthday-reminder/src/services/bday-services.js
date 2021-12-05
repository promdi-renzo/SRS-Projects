import axios from "axios";
import ROUTES from "../constants";

export const getAllBday = () => {
  return axios.get(`${ROUTES.BDAY.DEFAULT}${ROUTES.BDAY.BDAY}`);
};
