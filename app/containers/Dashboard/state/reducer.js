/**
 * Dashboard Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */

/**
 * IMPORTS
 */
import {} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  username: '',
});

/**
 * Dashboard Reducer
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 * @param state
 * @param action
 * @returns {*}
 */
function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default dashboardReducer;
