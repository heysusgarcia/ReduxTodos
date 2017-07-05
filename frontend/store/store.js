import { createStore } from 'redux';
import RootReducer  from '../reducers/root_reducer';


const configureStore = (preloadedState = {}) => {
  const store = createStore(RootReducer, preloadedState);

  store.subscribe(() => {
    localStorage.state = store.getState();
  })
  return store;
};

export default configureStore;
