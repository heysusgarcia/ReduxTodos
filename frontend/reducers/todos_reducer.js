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

// const initialState = {
//   todos: {
//     1: {
//       id: 1,
//       title: "take a shower",
//       body: "and be clean",
//       done: false
//     }
//   },
//   steps: {
//     1: { // this is the step with id = 1
//       id: 1,
//       title: "walk to store",
//       done: false,
//       todo_id: 1
//     },
//     2: { // this is the step with id = 2
//       id: 2,
//       title: "buy soap",
//       done: false,
//       todo_id: 1
//     }
//   }
// };


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
      newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
