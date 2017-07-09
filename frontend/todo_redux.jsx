import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions';
import { allTodos, stepsByTodoId } from './reducers/selectors';
import Root from './components/root';
import * as TodoAPIUtil from './util/todo_api_util';

window.store = configureStore;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;
window.allTodos = allTodos;
window.stepsByTodoId = stepsByTodoId;
window.TodoAPIUtil = TodoAPIUtil;


document.addEventListener("DOMContentLoaded", () => {
  const preloadedState = localStorage.state ? JSON.parse(localStorage.state) : {};

  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store}/>, document.getElementById('content'));
});
