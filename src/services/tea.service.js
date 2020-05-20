import axios from "axios";
import { successHandler, errorHandler } from ".";
import endpoint from "./endpoint";

export const listTeaService = () => {
  return axios
    .get(endpoint.listTea())
    .then(response => {
      return successHandler(response).then((data) => {
        return data;
      });
    })
    .catch(error => {
      return errorHandler(error);
    });
};

export const addItemService = (payload) => {
  return axios
    .post(endpoint.addTea(), payload)
    .then((response) => {
      return successHandler(response).then(({ result }) => {
        return result;
      });
    })
    .catch((error) => {
      return errorHandler(error);
    });
};

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

export const getTeaService = (id) => {
  return axios
    .get(endpoint.getTea(id))
    .then(response => {
      return successHandler(response).then((data) => {
        return data;
      });
    })
    .catch(error => {
      return errorHandler(error);
    });
};