import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions';
import { allTodos } from './reducers/selectors';
import Root from './components/root';

window.store = configureStore;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;
window.allTodos = allTodos;


document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root store={configureStore}/>, document.getElementById('content'));
});
