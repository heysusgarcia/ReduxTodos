import { combineReducers } from 'redux';

import todosReducer from './todos_reducer';
import stepsReducer from './steps_reducer';

const RootReducer = combineReducers({
  todos: todosReducer,
  steps: stepsReducers
});

export default RootReducer;
