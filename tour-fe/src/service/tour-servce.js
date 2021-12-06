import axios from "axios";
import ROUTES from "./constants";

export const getAllTour = () => {
  return axios.get(`${ROUTES.TOUR.DEFAULT}`);
};

export const deleteTourById = (id) => {
  return axios.delete(`${ROUTES.TOUR.DEFAULT}${id}`);
};
