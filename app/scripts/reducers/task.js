import immutable from 'immutability-helper';
import { createReducer } from 'modules/helpers';

import { ActionTypes } from 'constants/index';

export const taskState = {
  task: '',
  tasks: [],
  status: 'idle',
};

export default {
  task: createReducer(taskState, {
    [ActionTypes.GET_TASKS_SUCCESS](state, {payload}) {
      return immutable(state, {
        tasks: { $set: payload.data || []  },
      });
    },
  }),
};
