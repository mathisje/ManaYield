import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { resultsSuccess, resultsFailure } from '../actions'

export function* resultsWatcher() {
  yield takeLatest('RESULTS_REQUEST', resultsWorker);
}

function fetchResults(deckList) {
  return axios({
    method: 'post',
    url: 'http://localhost:3001/calculate',
    data: deckList
  });
}

function* resultsWorker(action) {
  try {
    let response = yield call(fetchResults, action.deckList);
    let manaSpent = response.data;

    yield put(resultsSuccess(manaSpent));

  } catch (error) {
    yield put(resultsFailure(error));
  }
}