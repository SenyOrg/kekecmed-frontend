/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  NAVIGATION_TOGGLE,
  CONTROL_SIDEBAR_TOGGLE,
  CONTROL_SIDEBAR_ACTIVATE_TAB
} from './constants';
import { fromJS } from 'immutable';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {
  navigation: {
    collapsed: false
  },
  controlSidebar: {
    collapsed: false,
    activeTab: false
  }
};

// The initial state of the App
const initialState = fromJS({
  view: persistedState,
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case NAVIGATION_TOGGLE:
      return state.setIn(['view', 'navigation', 'collapsed'], !state.getIn(['view', 'navigation', 'collapsed']));
    case CONTROL_SIDEBAR_TOGGLE:
      return state.setIn(['view', 'controlSidebar', 'collapsed'], !state.getIn(['view', 'controlSidebar', 'collapsed']));
    case CONTROL_SIDEBAR_ACTIVATE_TAB:
      return state.setIn(['view', 'controlSidebar', 'activeTab'], '#' + action.payload.split('#')[1]);
    default:
      return state;
  }
}

export default appReducer;
