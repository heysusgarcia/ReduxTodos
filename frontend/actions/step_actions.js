import * as StepAPIUtil from '../util/step_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

export const receiveSteps = steps => ({
  type: RECEIVE_STEPS,
  steps
});

export const receiveStep = step => ({
  type: RECEIVE_STEP,
  step
});

export const removeStep = step => ({
  type: REMOVE_STEP,
  step
});

export const fetchSteps = todoId => dispatch => (
  StepAPIUtil.fetchSteps(todoId).then(steps => dispatch(receiveSteps(steps)))
);

export const createStep = (todoId, step) => dispatch => (
  StepAPIUtil.createStep(todoId, step).then(step => {
    dispatch(receiveStep(step)); dispatch(clearErrors())},
    error => dispatch(receiveErrors(error.responseJSON))
  )
);
