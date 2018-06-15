import keyMirror from 'fbjs/lib/keyMirror';

/**
 * @namespace Constants
 * @desc App constants
 */

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */
export const ActionTypes = keyMirror({
  USER_LOGIN_REQUEST: undefined,
  USER_LOGIN_SUCCESS: undefined,
  USER_LOGIN_FAILURE: undefined,
  USER_LOGOUT_REQUEST: undefined,
  USER_LOGOUT_SUCCESS: undefined,
  USER_LOGOUT_FAILURE: undefined,
  GITHUB_GET_REPOS_REQUEST: undefined,
  GITHUB_GET_REPOS_SUCCESS: undefined,
  GITHUB_GET_REPOS_FAILURE: undefined,
  SHOW_ALERT: undefined,
  HIDE_ALERT: undefined,
  GET_TASKS:undefined,
  GET_TASKS_SUCCESS:undefined,
  GET_TASKS_FAILURE:undefined,
  CREATE_TASK:undefined,
  CREATE_TASK_SUCCESS:undefined,
  CREATE_TASK_FAILURE:undefined,
  EDIT_TASK:undefined,
  EDIT_TASK_SUCCESS:undefined,
  EDIT_TASK_FAILURE:undefined,
  DELETE_TASK:undefined,
  DELETE_TASK_SUCCESS:undefined,
  DELETE_TASK_FAILURE:undefined,
  VIEW_TASK:undefined,
  VIEW_TASK_SUCCESS:undefined,
  VIEW_TASK_FAILURE:undefined,
});

/**
 * @constant {Object} XHR
 * @memberof Constants
 */
export const XHR = keyMirror({
  SUCCESS: undefined,
  FAIL: undefined,
});
