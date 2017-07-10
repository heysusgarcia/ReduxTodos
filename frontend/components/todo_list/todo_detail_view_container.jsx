import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';

import { deleteTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch, { todo }) => ({
  deleteTodo: (todo) => dispatch(deleteTodo(todo))
});

const TodoDetailViewContainer = connect(
  null,
  mapDispatchToProps
)(TodoDetailView);

export default TodoDetailViewContainer;
