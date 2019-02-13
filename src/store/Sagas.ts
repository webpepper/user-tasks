import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchUsers, fetchUsersFulfilled, fetchUsersFailed } from './Actions';

/**
 * This bit of code should really be in a separate module, but included here for simplicity.
 *
 * It picks the right URL for a live (production) server and for
 * a development one (webpack-development-server)
 */
const usersApiHost = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:8080/';

export function* fetchUsersSaga() {
  try {
    const response = yield call(fetch, `${usersApiHost}api/users`);
    const json = yield response.json();
    yield put(fetchUsersFulfilled(json));
  } catch (e) {
    yield put(fetchUsersFailed(e));
    return;
  }
}

export function* watchFetchUsers() {
  yield takeLatest(fetchUsers, fetchUsersSaga);
}
