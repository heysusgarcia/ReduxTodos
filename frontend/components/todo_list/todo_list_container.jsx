import { connect } from 'react-redux';
import TodoList from '../todo_list';

// maps slice of state to props object
const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

// create action dispatcher
const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
