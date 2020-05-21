import { ActionTypes } from "./action";

const initialState = {
  isFetching: false,
  name: "",
  price: "",
  description: "",
  url: "",
  listTeaAr: [],
  error: "",
  teaObject: {},
};

const AddTeaReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        name: action.payload.name,
        price: action.payload.price,
        description: action.payload.description,
        url: action.payload.url,
      };
    case ActionTypes.ADD_ITEM_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case ActionTypes.LIST_TEA:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.LIST_TEA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listTeaAr: action.payload && action.payload.items,
        itemCount: action.payload && action.payload.counter,
      };
    case ActionTypes.LIST_TEA_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case ActionTypes.GET_TEA:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.GET_TEA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        teaObject: action.payload && action.payload.item,
      };
    case ActionTypes.GET_TEA_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case ActionTypes.DELETE_TEA:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.DELETE_TEA_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case ActionTypes.DELETE_TEA_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AddTeaReducer;
