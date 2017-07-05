import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP } from '../actions/step_actions';

import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "walk to store",
    body: "use google maps for best route",
    done: false,
    todo_id: 1
  },
  2: {
    id: 2,
    title: "buy soap",
    body: "make sure it's dawn dish soap",
    done: false,
    todo_id: 1
  },
  3: {
    id: 3,
    title: "walk to park",
    body: "and remember to bring frisbee",
    done: false,
    todo_id: 3
  },
  4: {
    id: 4,
    title: "play with dog",
    body: "remember to bring poopy bags",
    done: false,
    todo_id: 2
  }
};

const stepsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_STEPS:
      newState = merge({}, state);
      action.steps.forEach((step) => newState[step.id] = step);
      return newState;
    case RECEIVE_STEP:
      const newStep = { [action.step.id]: action.step };
      return merge({}, state, newStep);
    case REMOVE_STEP:
      newState = merge({}, state);
      delete newState[action.step.id];
      return newState;
    default:
      return state;
  }
};

export default stepsReducer;
