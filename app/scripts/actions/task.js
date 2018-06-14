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
