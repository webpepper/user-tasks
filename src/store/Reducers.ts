import { IStoreState, IUser, ISelectedTask } from '../models';
import { fromJS, updateIn } from 'immutable';

// Reducer(s) are written separately to allow for easier unit testing

export const fetchUsersFulfilledReducer = () =>
    (state: IStoreState, { payload }: ReduxActions.Action<IUser[]>) =>
        ({ ...state, users: payload });

export const taskSelectReducer = () =>
    (state: IStoreState, { payload }: ReduxActions.Action<ISelectedTask>) => {
      const newState = updateIn(state, ['users', payload.userIndex, 'tasks', payload.taskIndex, 'selected'], v => !v);
      return newState;
    };
