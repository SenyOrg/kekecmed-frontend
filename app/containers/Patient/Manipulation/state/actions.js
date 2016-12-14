/*
 * Patient Index Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

/**
 * IMPORTS
 */
import {
  FETCH_PATIENTS,
  FETCH_PATIENTS_PENDING,
  FETCH_PATIENTS_FULFILLED,
  FETCH_PATIENTS_REJECTED
} from './constants';

/**
 * Fetch patients action
 *
 * @returns {{type: string}}
 */
export function fetchPatients() {
  return {
    type: FETCH_PATIENTS
  }
}

/**
 * Fetch patients pending
 *
 * @returns {{type}}
 */
export function fetchPatientsPending() {
  return {
    type: FETCH_PATIENTS_PENDING
  }
}

/**
 * Fetch patients fulfilled
 *
 * @param payload
 * @returns {{type, payload: *}}
 */
export function fetchPatientsFulfilled(payload) {
  return {
    type: FETCH_PATIENTS_FULFILLED,
    payload: payload
  }
}

/**
 * Fetch patients rejected
 *
 * @param error
 * @returns {{type, payload: *}}
 */
export function fetchPatientsRejected(error) {
  return {
    type: FETCH_PATIENTS_REJECTED,
    payload: error
  }
}