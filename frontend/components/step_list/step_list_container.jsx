import { connect } from 'react-redux';
import StepList from './step_list';

import { stepsByTodoId } from '../../reducers/selectors';
import { receiveStep, createStep } from '../../actions/step_actions';

const mapStateToProps = (state, { todo_id }) => ({
  steps: stepsByTodoId(state, todo_id),
  todo_id
});


const mapDispatchToProps = dispatch => ({
  createStep: step => dispatch(createStep(step))
});

const StepListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);

export default StepListContainer;
