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
import {FETCH_PATIENT, FETCH_PATIENT_FULFILLED} from './constants';
import {
  fetchPatientPending,
  fetchPatientFulfilled,
  fetchPatientRejected,
  fetchPatientNotesPending,
  fetchPatientNotesFulfilled,
  fetchPatientNotesRejected,
  fetchPatientTasksPending,
  fetchPatientTasksFulfilled,
  fetchPatientTasksRejected,
  noteCreated
} from './actions';
import { updateBreadCrumb, updateHeader, showLoadingIndicator, hideLoadingIndicator } from 'containers/App/actions';
import axios from 'axios';
import {selectUser} from '../../../App/selectors';

/**
 * Fetch patients
 */
export function* fetchPatient(action) {
  try {
    // Start pending and show loading indicator
    yield [put(fetchPatientPending()), put(showLoadingIndicator())];

    // Fetch patients
    const data = yield call(() => axios.get('http://localhost:3010/v1/patient/' + action.payload + '?relations=false'));
    yield [
      put(updateBreadCrumb([
        {title: 'Patients', icon: 'wheelchair', active: false}, {
          title: data.data.firstName + ' ' + data.data.lastName,
          icon: 'user',
          active: false
        },
        {title: 'View' , icon: 'search', active: false},
      ])), put(updateHeader(data.data.firstName + ' ' + data.data.lastName, ""))
    ]

    // Fulfill fetch process and hide loading indicator
    yield [put(fetchPatientFulfilled(data)), put(hideLoadingIndicator())];
  } catch (err) {
    // An error occurred - Dispatch it and hide loading indicator
    yield [put(fetchPatientRejected(err)), put(hideLoadingIndicator())];
  }
}

export function* fetchPatientNotes(action) {
  try {
    // Start pending and show loading indicator
    yield [put(fetchPatientNotesPending()), put(showLoadingIndicator())];

    // Fetch patients
    const data = yield call(() => axios.get('http://localhost:3010/v1/patient/' +
                                            action.payload.data.id +
                                            '/notes?relations=false'));

    // Fulfill fetch process and hide loading indicator
    yield [put(fetchPatientNotesFulfilled(data)), put(hideLoadingIndicator())];
  } catch (err) {
    // An error occurred - Dispatch it and hide loading indicator
    yield [put(fetchPatientNotesRejected(err)), put(hideLoadingIndicator())];
  }
}

export function* fetchPatientTasks(action) {
  try {
    // Start pending and show loading indicator
    yield [put(fetchPatientTasksPending()), put(showLoadingIndicator())];

    // Fetch patients
    const data = yield call(() => axios.get('http://localhost:3010/v1/patient/' +
                                            action.payload.data.id +
                                            '/tasks?relations=false'));

    // Fulfill fetch process and hide loading indicator
    yield [put(fetchPatientTasksFulfilled(data)), put(hideLoadingIndicator())];
  } catch (err) {
    // An error occurred - Dispatch it and hide loading indicator
    yield [put(fetchPatientTasksRejected(err)), put(hideLoadingIndicator())];
  }
}

export function* tasksAndNotes(action) {
  yield [fetchPatientNotes(action), fetchPatientTasks(action)];
}

export function* createPatientNote(action) {
  try {
    // Start pending and show loading indicator
    yield put(showLoadingIndicator());

    // Create note
    const data = yield call(() => {
      return axios.post('http://localhost:3010/v1/patient/' + action.payload.authorId + '/notes', {
        body: action.payload.noteText,
        authorId: 1
      })
    });

    // Set user
    data.data.author = (yield select(selectUser())).toJS();

    // Fulfill fetch process and hide loading indicator
    yield [put(noteCreated(data)), hideLoadingIndicator()];
  } catch (err) {
    // An error occurred - Dispatch it and hide loading indicator
    yield put(hideLoadingIndicator());
  }
}

/**
 * Await 'FETCH_PATIENTS' actions
 */
export function* awaitFetchPatient() {
  yield fork(takeLatest, FETCH_PATIENT, fetchPatient);
  yield fork(takeLatest, FETCH_PATIENT_FULFILLED, tasksAndNotes);
  yield fork(takeLatest, 'createNote', createPatientNote);
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
