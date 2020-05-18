import axios from "axios";
import endPoint from "./endpoint";
import { successHandler, errorHandler } from "./index";

export const addItemService = (payload) => {
  return axios
    .post(endPoint.addTea(), payload)
    .then((response) => {
      return successHandler(response).then(({ result }) => {
        return result;
      });
    })
    .catch((error) => {
      return errorHandler(error);
    });
};
