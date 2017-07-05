import { connect } from 'react-redux';
import StepListItem from './step_list_item';

import { receiveStep, removeStep } from '../../actions/step_actions';


const mapDispatchToProps = (dispatch, { step }) => ({
  removeStep: (step) => dispatch(removeStep(step)),
  receiveStep: (step) => dispatch(receiveStep(step))
});

const StepListItemContainer = connect(
  null,
  mapDispatchToProps
)(StepListItem);

export default StepListItemContainer;
