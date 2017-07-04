import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  receiveSteps: (steps) => dispatch(receiveSteps(steps))
});

const TodoDetailViewContainer = connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
