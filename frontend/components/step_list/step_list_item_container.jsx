import { connect } from 'react-redux';
import StepListItem from './step_list_item';

import { receiveStep, updateStep, deleteStep } from '../../actions/step_actions';


const mapDispatchToProps = (dispatch, { step }) => ({
  deleteStep: (step) => dispatch(deleteStep(step)),
  updateStep: (step) => dispatch(updateStep(step))
});

const StepListItemContainer = connect(
  null,
  mapDispatchToProps
)(StepListItem);

export default StepListItemContainer;
