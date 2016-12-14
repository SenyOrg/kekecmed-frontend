/*
 * Patient Index Constants
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
export const FETCH_PATIENTS           = 'kekecmed/patient/index/FETCH_PATIENTS';
export const FETCH_PATIENTS_PENDING   = 'kekecmed/patient/index/FETCH_PATIENTS_PENDING';
export const FETCH_PATIENTS_FULFILLED = 'kekecmed/patient/index/FETCH_PATIENTS_FULFILLED';
export const FETCH_PATIENTS_REJECTED  = 'kekecmed/patient/index/FETCH_PATIENTS_REJECTED';

/**
 * Table
 *
 * @type {string}
 */
export const SAVE_TABLE_STATE = 'kekecmed/patient/index/table/SAVE_TABLE_STATE';

/**
 * Delete Patient
 *
 * @type {string}
 */
export const DELETE_PATIENTS = 'kekecmed/patient/index/DELETE_PATIENTS';