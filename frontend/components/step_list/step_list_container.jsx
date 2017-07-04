import { connect } from 'react-redux';
import StepList from './step-list';


const mapStateToProps = (state, { todo_id }) => ({
  steps: stepsByTodoId(state, todo_id),
  todo_id
});

const mapDispatchToProps = (dispatch) => ({
  receiveSteps: (steps) => dispatch(receiveSteps(todo))
});

const StepListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
export default StepListContainer;
