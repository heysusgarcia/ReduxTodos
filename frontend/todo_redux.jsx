import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import { allTodos } from './reducers/selectors';

window.store = configureStore;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.allTodos = allTodos;


document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<h1>*</h1>, document.getElementById('content'));
});
