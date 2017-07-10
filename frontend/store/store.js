import { createStore, applyMiddleware } from 'redux';
import RootReducer  from '../reducers/root_reducer';
import thunkMiddleware from '../middleware/thunk_middleware';

const configureStore = (preloadedState = {}) => {
  return createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, addLoggingToDispatch)
  );
};

const addLoggingToDispatch = store => next => action => {
  console.log(store.getState());
  console.log(action);
  next(action);
  console.log(store.getState());
}

export default configureStore;
