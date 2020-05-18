import { addItemService } from "../../services/addItem.service";
import { errHandler } from "../../services";

const MODULE_NAME = '[TEA ITEM]';

export const ActionTypes = {
  ADD_ITEM: `${MODULE_NAME} ADD ITEM`,
  ADD_ITEM_ERROR: `${MODULE_NAME} ADD ITEM ERROR`,
  ADD_ITEM_SUCCESS: `${MODULE_NAME} ADD ITEM SUCCESS`,
};

export const addTeaItem = payload => dispatch => {
  dispatch({ type: ActionTypes.ADD_ITEM });
  return addItemService(payload)
    .then(response => {
      dispatch({
        type: ActionTypes.ADD_ITEM_SUCCESS,
        payload: response,
      });
      return response;
    })
    .catch(error => {
      dispatch({
        type: ActionTypes.ADD_ITEM_ERROR,
        payload: error,
      });
      errHandler(error);
    });
};