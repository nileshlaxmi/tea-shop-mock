import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from "redux-logger";
import freeze from 'redux-freeze';
import addTea from './add/reducer';

export const appReducer = combineReducers({
  addTea,
});

const loggerMiddleware = createLogger();

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

function configureStore(preloadedState) {
  const middlewares = [];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware, freeze);
    // middlewares.push(loggerMiddleware, freeze);
  }
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares, thunkMiddleware)),
  );
}

export default configureStore();