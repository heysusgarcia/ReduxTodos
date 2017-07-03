import { connect } from 'react-redux';
import TodoList from './todo_list';

// maps slice of state to props object
const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

// create action dispatcher
// these map to our event/action functions in react
const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo))
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
