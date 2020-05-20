import { addItemService, listTeaService, getTeaService } from "../../services/tea.service";
import { errHandler } from "../../services";

const MODULE_NAME = "[TEA]";

export const ActionTypes = {
  ADD_ITEM: `${MODULE_NAME} ADD ITEM`,
  ADD_ITEM_ERROR: `${MODULE_NAME} ADD ITEM ERROR`,
  ADD_ITEM_SUCCESS: `${MODULE_NAME} ADD ITEM SUCCESS`,
  LIST_TEA: `${MODULE_NAME} LIST TEA`,
  LIST_TEA_ERROR: `${MODULE_NAME} LIST TEA ERROR`,
  LIST_TEA_SUCCESS: `${MODULE_NAME} LIST TEA SUCCESS`,
  GET_TEA: `${MODULE_NAME} GET TEA`,
  GET_TEA_ERROR: `${MODULE_NAME} GET TEA ERROR`,
  GET_TEA_SUCCESS: `${MODULE_NAME} GET TEA SUCCESS`,
};

export const addTeaItem = (payload) => (dispatch) => {
  dispatch({ type: ActionTypes.ADD_ITEM });
  return addItemService(payload)
    .then((response) => {
      dispatch({
        type: ActionTypes.ADD_ITEM_SUCCESS,
        payload: response,
      });
      return response;
    })
    .catch((error) => {
      dispatch({
        type: ActionTypes.ADD_ITEM_ERROR,
        payload: error,
      });
      errHandler(error);
    });
};

export const listTea = () => (dispatch) => {
  dispatch({ type: ActionTypes.LIST_TEA });
  return listTeaService()
    .then((response) => {
      dispatch({
        type: ActionTypes.LIST_TEA_SUCCESS,
        payload: response,
      });
    })
    .catch((error) => {
      dispatch({
        type: ActionTypes.LIST_TEA_ERROR,
        payload: 'error',
      });
    });
};

export const getTea = (payload) => (dispatch) => {
  dispatch({ type: ActionTypes.GET_TEA });
  return getTeaService(payload)
    .then((response) => {
      debugger
      dispatch({
        type: ActionTypes.GET_TEA_SUCCESS,
        payload: response,
      });
      return response;
    })
    .catch((error) => {
      dispatch({
        type: ActionTypes.GET_TEA_ERROR,
        payload: error,
      });
      errHandler(error);
    });
};