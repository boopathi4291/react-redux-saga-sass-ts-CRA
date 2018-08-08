import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../actions/action.types';
import * as actions from '../actions/actions';
import { Api } from "../services";


export function* getRecords() {
  const records = yield call(Api.fetchRecords)
  yield put(actions.receiveRecord(records))
}
export function* watchGetRecords() {
  yield takeLatest(actionTypes.FETCH_DATA, getRecords)
}

export default function* rootSaga() {
  yield all([fork(getRecords), fork(watchGetRecords)])
}
