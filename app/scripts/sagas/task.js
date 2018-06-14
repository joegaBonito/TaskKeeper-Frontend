/**
 * @module Sagas/Task
 * @desc Task
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'modules/client';

import { ActionTypes } from 'constants/index';

/**
 * Login
 *
 * @param {Object} action
 *
 */
export function* getTasks({ payload }) {
  try {
    const response = yield call(request, `http://localhost:8088/api/taskkeeping-list`);
    yield put({
      type: ActionTypes.GET_TASKS_SUCCESS,
      payload: { data: response },
    });
  }
  catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.GET_TASKS_FAILURE,
      payload: err,
    });
  }
}

/**
 * Task Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.GET_TASKS, getTasks),
  ]);
}
