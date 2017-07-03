import { RECEIVE_TODOS,
         RECEIVE_TODO,
         REMOVE_TODO } from '../actions/todo_actions';

import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};


const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_TODOS:
      newState = {};
      action.todos.forEach(todo => newState[todo.id] = todo );
      return newState;
    case RECEIVE_TODO:
      const newTodo = {[action.todo.id]: action.todo };
      return merge({}, state, newTodo);
    case REMOVE_TODO:
      const idx = state.indexOf(action.todo);
      if (idx !== -1) {
        return [
          ...state.slice(0, idx),
          ...state.slice(idx + 1)
        ];
      }
      return state;
    default:
      return state;
  }
};

export default todosReducer;
