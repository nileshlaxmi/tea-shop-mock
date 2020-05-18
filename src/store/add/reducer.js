import { ActionTypes } from "./action";

const initialState = {
  isFetching: false,
  name: "",
  price: "",
  description: "",
  url: "",
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
        isFetching: true,
        name: action.payload.name,
        price: action.payload.price,
        description: action.payload.description,
        url: action.payload.url,
      };
    case ActionTypes.ADD_ITEM_ERROR:
      return {
        ...state,
        name: action.payload.flowId,
        price: action.payload.flowName,
        description: [],
        url: false,
      };
    
    default:
      return state;
  }
};

export default AddTeaReducer;
