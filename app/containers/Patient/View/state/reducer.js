/*
 * Patient View Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

/**
 * IMPORTS
 */
import {
  FETCH_PATIENT_PENDING,
  FETCH_PATIENT_FULFILLED,
  FETCH_PATIENT_REJECTED,
  FETCH_PATIENT_NOTES_PENDING,
  FETCH_PATIENT_NOTES_REJECTED,
  FETCH_PATIENT_NOTES_FULFILLED,
  FETCH_PATIENT_TASKS,
  FETCH_PATIENT_TASKS_PENDING,
  FETCH_PATIENT_TASKS_FULFILLED,
  FETCH_PATIENT_TASKS_REJECTED,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  view: {

  },
  data: {
    loading: false,
    fetched: false,
    error: null,
    patient: {},
    notes: {
      loading: false,
      fetched: false,
      error: null,
      data: []
    },
    tasks: {
      loading: false,
      fetched: false,
      error: null,
      data: []
    }
  }
});

function patientViewReducer(state = initialState, action) {
  switch (action.type) {

    /**
     * Patient related reducers
     */
    case FETCH_PATIENT_PENDING:
      return state.setIn(['data', 'loading'], true)
            .setIn(['data', 'fetched'], false)
            .setIn(['data', 'error'], null);
    case FETCH_PATIENT_FULFILLED:
      return state.setIn(['data', 'loading'], false)
            .setIn(['data', 'fetched'], true)
            .setIn(['data', 'patient'], action.payload.data)
            .setIn(['data', 'error'], null);
    case FETCH_PATIENT_REJECTED:
      return state.setIn(['data', 'loading'], false)
                   .setIn(['data', 'fetched'], false)
                   .setIn(['data', 'error'], action.payload);

    /**
     * Note related reducers
     */
    case FETCH_PATIENT_NOTES_PENDING:
      return state.setIn(['data', 'notes', 'loading'], true).
                   setIn(['data', 'notes', 'fetched'], false).
                   setIn(['data', 'notes', 'error'], null);
    case FETCH_PATIENT_NOTES_FULFILLED:
      return state.setIn(['data', 'notes', 'loading'], false).
                   setIn(['data', 'notes', 'fetched'], true).
                   setIn(['data', 'notes', 'data'], fromJS(action.payload.data)).
                   setIn(['data', 'notes', 'error'], null);
    case FETCH_PATIENT_NOTES_REJECTED:
      return state.setIn(['data', 'notes', 'loading'], false).
                   setIn(['data', 'notes', 'fetched'], false).
                   setIn(['data', 'notes', 'error'], action.payload);
    case 'noteCreated':
      return state.updateIn(['data', 'notes'], data => data.push(action.payload.data));

    /**
     * Task related reducers
     */
    case FETCH_PATIENT_TASKS_PENDING:
      return state.setIn(['data', 'tasks', 'loading'], true).
                   setIn(['data', 'tasks', 'fetched'], false).
                   setIn(['data', 'tasks', 'error'], null);
    case FETCH_PATIENT_TASKS_FULFILLED:
      return state.setIn(['data', 'tasks', 'loading'], false).
                   setIn(['data', 'tasks', 'fetched'], true).
                   setIn(['data', 'tasks', 'data'], fromJS(action.payload.data)).
                   setIn(['data', 'tasks', 'error'], null);
    case FETCH_PATIENT_TASKS_REJECTED:
      return state.setIn(['data', 'tasks', 'loading'], false).
                   setIn(['data', 'tasks', 'fetched'], false).
                   setIn(['data', 'tasks', 'error'], action.payload);


    default:
      return state;
  }
}

export default patientViewReducer;
