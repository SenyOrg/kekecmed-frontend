/**
 * App Reducer
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
import {
  NAVIGATION_TOGGLE,
  NAVIGATION_STATE,
  CONTROL_SIDEBAR_TOGGLE,
  CONTROL_SIDEBAR_ACTIVATE_TAB,
  UPDATE_BREADCRUMB,
  UPDATE_HEADER,
  UPDATE_PAGE_HEADER,
  UPDATE_PAGE_SUB_HEADER,
  LOADING_INDICATOR
} from './constants';
import { fromJS } from 'immutable';

/**
 * Get state from localStorage or create a new one
 *
 * @type {{navigation: {collapsed: boolean}, controlSidebar: {collapsed: boolean, activeTab: boolean}, pageHeader:
 *     null, pageSubHeader: null, breadCrumb: Array, loadingIndicator: boolean}}
 */
const persistedState = localStorage.getItem('kekecmed') ? JSON.parse(localStorage.getItem('kekecmed')) : {
  navigation: {
    collapsed: false
  },
  controlSidebar: {
    collapsed: true,
    activeTab: false
  },
  pageHeader: null,
  pageSubHeader: null,
  breadCrumb: [],
  loadingIndicator: false
};

// The initial state of the App
const initialState = fromJS({
  view: persistedState,
  loading: false,
  error: false,
  user: {
    /**
     * @todo: Replace this when user authentication is ready
     */
    id: 1,
    firstName: "Leandro",
    lastName: "Frahmeke",
    birthDate: "2004-11-01T16:33:16.000Z",
    gender: "m",
    street: "030 Katrin Loop",
    no: "Mews",
    zipCode: null,
    city: "Alt Edwinburg",
    mobile: "(0637) 836127849",
    phone: "+49-5429-17629379",
    email: "Juan94@gmail.com",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/tgerken/128.jpg",
    createdAt: "2017-01-02T19:50:39.000Z",
    updatedAt: "2017-01-02T19:50:39.000Z"
  }
});

/**
 * App Reducer
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 * @param state
 * @param action
 * @returns {*}
 */
function appReducer(state = initialState, action) {
  switch (action.type) {
    case NAVIGATION_STATE:
      return state.setIn(['view', 'navigation', 'collapsed'], action.payload);
    case NAVIGATION_TOGGLE:
      return state.setIn(['view', 'navigation', 'collapsed'], !state.getIn(['view', 'navigation', 'collapsed']));
    case CONTROL_SIDEBAR_TOGGLE:
      return state.setIn(['view', 'controlSidebar', 'collapsed'], !state.getIn(['view', 'controlSidebar', 'collapsed']));
    case CONTROL_SIDEBAR_ACTIVATE_TAB:
      return state.setIn(['view', 'controlSidebar', 'activeTab'], '#' + action.payload.split('#')[1]);
    case UPDATE_BREADCRUMB:
      return state.setIn(['view', 'breadCrumb'], action.payload);
    case UPDATE_HEADER:
      return state.setIn(['view', 'pageHeader'], action.payload.header).setIn(['view', 'pageSubHeader'], action.payload.subHeader);
    case UPDATE_PAGE_HEADER:
      return state.setIn(['view', 'pageHeader'], action.payload);
    case UPDATE_PAGE_SUB_HEADER:
      return state.setIn(['view', 'pageSubHeader'], action.payload);
    case LOADING_INDICATOR:
      return state.setIn(['view', 'loadingIndicator'], action.payload);
    default:
      return state;
  }
}

export default appReducer;
