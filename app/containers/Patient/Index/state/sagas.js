/**
 * Patient Index Saga
 *
 * This file includes the root saga which takes care
 * about async tasks and state manipulation procedures.
 * Please be careful and refer the documentation of redux-saga:
 *
 * <https://yelouafi.github.io/redux-saga/>
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */

/**
 * IMPORTS
 */
import { takeLatest } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { FETCH_PATIENTS, DELETE_PATIENTS } from './constants';
import { fetchPatientsPending, fetchPatientsFulfilled, fetchPatientsRejected, fetchPatients as fp } from './actions';
import { updateBreadCrumb, updateHeader, showLoadingIndicator, hideLoadingIndicator } from 'containers/App/actions';
import axios from 'axios';

/**
 * Fetch patients
 */
export function* fetchPatients() {
  try {
    // Start pending and show loading indicator
    yield [put(fetchPatientsPending()), put(showLoadingIndicator())];

    // Fetch patients
    const data = yield call(() => axios.get('http://localhost:3010/v1/patient?relations=false'));

    // Fulfill fetch process and hide loading indicator
    yield [put(fetchPatientsFulfilled(data)), put(hideLoadingIndicator())];
  } catch (err) {
    // An error occurred - Dispatch it and hide loading indicator
    yield [put(fetchPatientsRejected(err)), put(hideLoadingIndicator())];
  }
}

/**
 * Await 'FETCH_PATIENTS' actions
 */
export function* awaitFetchPatients() {
  yield fork(takeLatest, FETCH_PATIENTS, fetchPatients);
}

export function* awaitDeletePatients() {
  yield fork(takeLatest, DELETE_PATIENTS, deletePatients)
}

/**
 * Delete patients
 *
 * @param action
 */
export function* deletePatients(action) {
  try {
    // Start pending and show loading indicator
    yield  put(showLoadingIndicator());
    // Delete all specified patients
    for (var i in action.payload) {
      try {
        yield call(() => axios.delete('http://localhost:3010/v1/patient/' + action.payload[i]));
      } catch (err) {
        console.log("Unable to delete patient", err);
      }
    }

    // Hide loading indicator
    yield put(hideLoadingIndicator());

    // Fetch patients again
    yield put(fp());
  } catch(err) {
    console.log(err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* rootSaga() {
  // Update BreadCrumb
  yield put(updateBreadCrumb([
    {title: 'Patients', icon: 'wheelchair', active: false},
    {title: 'List', icon: 'list', active: false},
  ]));

  // Update Page header
  yield put(updateHeader("Patients", ""));

  // Fork watcher so we can continue execution
  const watcherFetch = yield fork(awaitFetchPatients);
  const watcherDelete = yield fork(awaitDeletePatients);

  // Fetch patients initially
  yield put(fp());

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcherFetch);
  yield cancel(watcherDelete);
  // Reset Loading state
  yield put(hideLoadingIndicator());
}

// Bootstrap sagas
export default [
  rootSaga,
];
