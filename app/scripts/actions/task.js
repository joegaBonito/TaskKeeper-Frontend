// @flow
/**
 * @module Actions/Task
 * @desc Task Actions
 */
import { ActionTypes } from 'constants/index';

/**
 * Getting list of tasks
 *
 * @returns {Object}
 */
export function getTasks(): Object {
  return {
    type: ActionTypes.GET_TASKS,
    payload: {},
  };
}

/**
 * Create a task
 *
 * @returns {Object}
 */
export function createTask(payload): Object {
  return {
    type: ActionTypes.CREATE_TASK,
    payload: payload,
  };
}
