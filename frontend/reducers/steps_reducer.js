import { RECEIVE_STEPS,
         RECEIVE_STEP,
         REMOVE_STEP } from '../actions/step_actions';

import merge from 'lodash/merge';

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    default:
      return state;
  }
};

export default stepsReducer;
