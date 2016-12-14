/*
 * Patient View Actions
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
  FETCH_PATIENT,
  FETCH_PATIENT_PENDING,
  FETCH_PATIENT_FULFILLED,
  FETCH_PATIENT_REJECTED
} from './constants';

/**
 * Fetch patients action
 *
 * @returns {{type: string}}
 */
export function fetchPatient(id) {
  return {
    type: FETCH_PATIENT,
    payload: id
  }
}

/**
 * Fetch patients pending
 *
 * @returns {{type}}
 */
export function fetchPatientPending() {
  return {
    type: FETCH_PATIENT_PENDING
  }
}

/**
 * Fetch patients fulfilled
 *
 * @param payload
 * @returns {{type, payload: *}}
 */
export function fetchPatientFulfilled(payload) {
  return {
    type: FETCH_PATIENT_FULFILLED,
    payload: payload
  }
}

/**
 * Fetch patients rejected
 *
 * @param error
 * @returns {{type, payload: *}}
 */
export function fetchPatientRejected(error) {
  return {
    type: FETCH_PATIENT_REJECTED,
    payload: error
  }
}