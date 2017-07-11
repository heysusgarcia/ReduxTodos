import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';

import { deleteTodo } from '../../actions/todo_actions';
import { receiveSteps, fetchSteps } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch, { todo }) => ({
  deleteTodo: () => dispatch(deleteTodo(todo)),
  fetchSteps: () => dispatch(fetchSteps(todo.id))
});

const TodoDetailViewContainer = connect(
  null,
  mapDispatchToProps
)(TodoDetailView);

export default TodoDetailViewContainer;
