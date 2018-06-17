import immutable from 'immutability-helper';
import { createReducer } from 'modules/helpers';

import { ActionTypes } from 'constants/index';

export const taskState = {
  task: '',
  tasks: [],
  status: 'idle',
  taskcreateform: false
};

export default {
  task: createReducer(taskState, {
    [ActionTypes.GET_TASKS_SUCCESS](state, { payload }) {
      return immutable(state, {
        tasks: { $set: payload.data || []  },
      });
    },
    [ActionTypes.CREATE_TASK_SUCCESS](state, { payload }) {
      return immutable(state, {
        taskcreateform: { $set: payload.data  },
      });
    },
  }),
};
