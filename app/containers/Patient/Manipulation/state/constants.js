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
export const FETCH_PATIENTS = 'KekecMed/Patients/PatientListPage/FETCH_PATIENTS';
export const FETCH_PATIENTS_PENDING = 'KekecMed/Patients/PatientListPage/FETCH_PATIENTS_PENDING';
export const FETCH_PATIENTS_FULFILLED = 'KekecMed/Patients/PatientListPage/FETCH_PATIENTS_FULFILLED';
export const FETCH_PATIENTS_REJECTED = 'KekecMed/Patients/PatientListPage/FETCH_PATIENTS_REJECTED';