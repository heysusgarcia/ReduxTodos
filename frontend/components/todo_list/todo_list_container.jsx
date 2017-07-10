import { connect } from 'react-redux';
import TodoList from './todo_list';

import { receiveTodos, createTodo, updateTodo, deleteTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';


// maps slice of state to props object
const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors,
  state
});

// create action dispatcher
// these map to our event/action functions in react
const mapDispatchToProps = (dispatch, { step }) => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  fetchTodos: (todos) => dispatch(fetchTodos(todos)),
  updateTodo: (todo) => dispatch(updateTodo(todo))
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
