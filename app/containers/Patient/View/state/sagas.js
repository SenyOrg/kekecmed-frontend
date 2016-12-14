/**
 * Patient View Saga
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
import { FETCH_PATIENT } from './constants';
import { fetchPatientPending, fetchPatientFulfilled, fetchPatientRejected, fetchPatient as fp } from './actions';
import { updateBreadCrumb, updateHeader, showLoadingIndicator, hideLoadingIndicator } from 'containers/App/actions';
import axios from 'axios';

/**
 * Fetch patients
 */
export function* fetchPatient(action) {
  try {
    // Start pending and show loading indicator
    yield [put(fetchPatientPending()), put(showLoadingIndicator())];

    // Fetch patients
    const data = yield call(() => axios.get('http://localhost:3001/patients/' + action.payload));
    yield [
      put(updateBreadCrumb([
        {title: 'Patients', icon: 'wheelchair', active: false},
        {title: data.data.firstname + ' ' + data.data.lastname , icon: 'user', active: false},
        {title: 'View' , icon: 'search', active: false},
      ])),
      put(updateHeader(data.data.firstname + ' ' + data.data.lastname, ""))
    ]

    // Fulfill fetch process and hide loading indicator
    yield [put(fetchPatientFulfilled(data)), put(hideLoadingIndicator())];
  } catch (err) {
    // An error occurred - Dispatch it and hide loading indicator
    yield [put(fetchPatientRejected(err)), put(hideLoadingIndicator())];
  }
}

/**
 * Await 'FETCH_PATIENTS' actions
 */
export function* awaitFetchPatient() {
  yield fork(takeLatest, FETCH_PATIENT, fetchPatient);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* rootSaga() {
  // Update BreadCrumb
  yield put(updateBreadCrumb([
    {title: 'Patients', icon: 'wheelchair', active: false},
    {title: '' , icon: 'user', active: false},
    {title: 'View' , icon: 'search', active: false},
  ]));

  // Update Page header
  yield put(updateHeader("Patients", ""));

  // Fork watcher so we can continue execution
  const watcher = yield fork(awaitFetchPatient);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
  
  // Reset Loading state
  yield put(hideLoadingIndicator());
}

// Bootstrap sagas
export default [
  rootSaga,
];
