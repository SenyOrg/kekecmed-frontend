/**
 * Dashboard Saga
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
import { updateBreadCrumb, updateHeader, hideLoadingIndicator } from 'containers/App/actions';

/**
 * Root saga manages watcher lifecycle
 */
export function* rootSaga() {
  // Update BreadCrumb
  yield put(updateBreadCrumb([
    {title: 'Dahboard', icon: 'dashboard', active: false},
    {title: 'KekecMed', icon: 'list', active: false},
  ]));

  // Update Page header
  yield put(updateHeader("Dashboard", "Your KekecMed in one place"));
}

// Bootstrap sagas
export default [
  rootSaga,
];
