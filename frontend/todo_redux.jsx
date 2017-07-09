import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo, removeTodo, fetchTodos } from './actions/todo_actions';
import { allTodos, stepsByTodoId } from './reducers/selectors';
import Root from './components/root';

window.store = configureStore;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;
window.fetchTodos = fetchTodos;
window.allTodos = allTodos;
window.stepsByTodoId = stepsByTodoId;


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, document.getElementById('content'));
});
