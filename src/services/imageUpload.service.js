import axios from "axios";
import { successHandler, errorHandler } from ".";
import endpoint from "./endpoint";

export const imageUploadService = file => {
  return axios
    .post(endpoint.imageUpload(), file)
    .then(response => {
      return successHandler(response).then(({ result }) => {
        return result;
      });
    })
    .catch(error => {
      return errorHandler(error);
    });
};