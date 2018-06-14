import app from './app';
import github from './github';
import user from './user';
import task from './task';

export default {
  ...app,
  ...github,
  ...user,
  ...task
};
