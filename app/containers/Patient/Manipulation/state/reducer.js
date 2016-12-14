/*
 * Patient Index Reducer
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
  FETCH_PATIENTS,
  FETCH_PATIENTS_PENDING,
  FETCH_PATIENTS_FULFILLED,
  FETCH_PATIENTS_REJECTED
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
    list: []
  }
});

function patientListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PATIENTS_PENDING:
      return state.setIn(['data', 'loading'], true)
            .setIn(['data', 'fetched'], false)
            .setIn(['data', 'error'], null);
    case FETCH_PATIENTS_FULFILLED:
      return state.setIn(['data', 'loading'], false)
            .setIn(['data', 'fetched'], true)
            .setIn(['data', 'list'], action.payload.data)
            .setIn(['data', 'error'], null);
    case FETCH_PATIENTS_REJECTED:
      return state.setIn(['data', 'loading'], false)
                   .setIn(['data', 'fetched'], false)
                   .setIn(['data', 'error'], action.payload);
    default:
      return state;
  }
}

export default patientListReducer;
