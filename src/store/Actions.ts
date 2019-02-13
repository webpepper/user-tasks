import { createAction } from 'redux-actions';
import { IUser, ISelectedTask } from '../models';

export const fetchUsers = createAction('FETCH_USERS');
export const fetchUsersFulfilled = createAction<IUser[]>('FETCH_USERS_FULFILLED');
export const fetchUsersFailed = createAction<any>('FETCH_USERS_FAILED');

export const selectTask = createAction<ISelectedTask>('SELECT_TASK');
