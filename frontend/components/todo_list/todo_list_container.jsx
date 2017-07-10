import { connect } from 'react-redux';
import TodoList from './todo_list';

import { receiveTodos, createTodo, updateTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';


// maps slice of state to props object
const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors
});

// create action dispatcher
// these map to our event/action functions in react
const mapDispatchToProps = (dispatch, { step }) => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: (todos) => dispatch(fetchTodos(todos)),
  updateTodo: (todo) => dispatch(updateTodo(todo))
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
