/**
 * @module Sagas/Task
 * @desc Task
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'modules/client';

import { ActionTypes } from 'constants/index';

/**
 * Getting Tasks
 *
 * @param {Object} action
 *
 */
export function* getTasks({ payload }) {
  try {
    const response = yield call(request,`http://localhost:8180/api/taskkeeping-list`);
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
 * Create Task
 *
 * @param {Object} action
 *
 */
export function* createTask({ payload }) {
  try {
    var createTaskfunc = function() {
      return fetch(`http://localhost:8180/api/taskkeeping-create`,{
        method: 'POST',
        headers: {
          Accept:'application/json',
          'content-type':'application/json'
        },
        body: JSON.stringify(payload)
        // JSON.stringify(
        //   'title':payload.title,
        //   'date_created':payload.date_created,
        //   'owner':payload.owner,
        //   'status':payload.status,
        //   'description':payload.description,
        //   'date_modified':payload.date_modified
        // )
      })
    }
    const response = yield call(createTaskfunc,`http://localhost:8180/api/taskkeeping-create`);
    yield put({
      type: ActionTypes.CREATE_TASK_SUCCESS,
      payload: {data: true},
    });
  }
  catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.CREATE_TASK_FAILURE,
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
    takeLatest(ActionTypes.CREATE_TASK, createTask),
  ]);
}
