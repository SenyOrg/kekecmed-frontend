/*
 * Patient View Constants
 *
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

/**
 * Fetch Patients
 *
 * @type {string}
 */
export const FETCH_PATIENT = 'kekecmed/patient/view/FETCH_PATIENT';
export const FETCH_PATIENT_PENDING = 'kekecmed/patient/view/FETCH_PATIENT_PENDING';
export const FETCH_PATIENT_FULFILLED = 'kekecmed/patient/view/FETCH_PATIENT_FULFILLED';
export const FETCH_PATIENT_REJECTED = 'kekecmed/patient/view/FETCH_PATIENT_REJECTED';

/**
 * Fetch patient notes
 *
 * @type {string}
 */
export const FETCH_PATIENT_NOTES           = 'kekecmed/patient/view/FETCH_PATIENT_NOTES';
export const FETCH_PATIENT_NOTES_PENDING   = 'kekecmed/patient/view/FETCH_PATIENT_NOTES_PENDING';
export const FETCH_PATIENT_NOTES_FULFILLED = 'kekecmed/patient/view/FETCH_PATIENT_NOTES_FULFILLED';
export const FETCH_PATIENT_NOTES_REJECTED  = 'kekecmed/patient/view/FETCH_PATIENT_NOTES_REJECTED';

/**
 * Fetch patient tasks
 *
 * @type {string}
 */
export const FETCH_PATIENT_TASKS           = 'kekecmed/patient/view/FETCH_PATIENT_TASKS';
export const FETCH_PATIENT_TASKS_PENDING   = 'kekecmed/patient/view/FETCH_PATIENT_TASKS_PENDING';
export const FETCH_PATIENT_TASKS_FULFILLED = 'kekecmed/patient/view/FETCH_PATIENT_TASKS_FULFILLED';
export const FETCH_PATIENT_TASKS_REJECTED  = 'kekecmed/patient/view/FETCH_PATIENT_TASKS_REJECTED';