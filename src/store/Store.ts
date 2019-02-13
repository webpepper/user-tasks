import { createStore, applyMiddleware } from 'redux';
import { handleActions } from 'redux-actions';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetchUsersFulfilled, selectTask } from './Actions';
import { IStoreState, ISelectedTask, IUser } from '../models';
import { fetchUsersFulfilledReducer, taskSelectReducer } from './Reducers';
import { watchFetchUsers } from './Sagas';

const defaultState: IStoreState = { users: [] };

const rootReducer = handleActions<IStoreState, IUser[] | ISelectedTask>(
  {
    [fetchUsersFulfilled.toString()]: fetchUsersFulfilledReducer(),
    [selectTask.toString()]: taskSelectReducer()
  },
  defaultState
);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchFetchUsers);
