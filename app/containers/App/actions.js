/*
 * App Actions
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
 * App Actions
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */

/**
 * IMPORTS
 */
import {
  NAVIGATION_STATE,
  NAVIGATION_TOGGLE,
  CONTROL_SIDEBAR_TOGGLE,
  CONTROL_SIDEBAR_ACTIVATE_TAB,
  UPDATE_BREADCRUMB,
  UPDATE_PAGE_HEADER,
  UPDATE_PAGE_SUB_HEADER,
  UPDATE_HEADER,
  LOADING_INDICATOR,
  ERROR_INDICATOR
} from './constants';


/**************************************************
 *              VIEW related actions              *
 **************************************************/

/**
 * Toggle navigation
 *
 * @returns {{type: string}}
 */
export function toggleNavigation() {
  return {
    type: NAVIGATION_TOGGLE
  };
}

/**
 * Toggle control sidebar
 */
export function toggleControlSidebar() {
  return {
    type: CONTROL_SIDEBAR_TOGGLE
  }
}

/**
 * Activate control sidebar tab
 *
 * @param tabName
 * @returns {{type, payload: *}}
 */
export function activateControlSidebarTab(tabName) {
  return {
    type: CONTROL_SIDEBAR_ACTIVATE_TAB,
    payload: tabName
  }
}

/**
 * Update the breadcrumb navigation
 *
 * @param breadCrumb
 * @returns {{type, payload: *}}
 */
export function updateBreadCrumb(breadCrumb) {
  return {
    type: UPDATE_BREADCRUMB,
    payload: breadCrumb
  }
}

/**
 * Update page header
 *
 * @param pageHeader
 * @returns {{type, payload: *}}
 */
export function updatePageHeader(pageHeader) {
  return {
    type: UPDATE_PAGE_HEADER,
    payload: pageHeader
  }
}

/**
 * Update page's subheader
 *
 * @param pageSubHeader
 * @returns {{type, payload: *}}
 */
export function updatePageSubHeader(pageSubHeader) {
  return {
    type: UPDATE_PAGE_SUB_HEADER,
    payload: pageSubHeader
  }
}

/**
 * Update page and sub header in one action
 *
 * @param header
 * @param subHeader
 * @returns {{type, payload: {header: *, subHeader: *}}}
 */
export function updateHeader(header, subHeader) {
  return {
    type: UPDATE_HEADER,
    payload: {
      header: header,
      subHeader: subHeader
    }
  }
}

/**
 * Set navigation state to open or collapsed
 *
 * @param state
 * @returns {{type: string, payload: *}}
 */
export function setNavigationState(state) {
  return {
    type: NAVIGATION_STATE,
    payload: state
  }
}

/**
 * Make navigation totally visible
 *
 * @returns {{type, payload}|{type: string, payload: *}}
 */
export function openNavigation() {
  return setNavigationState(false);
}

/**
 * Make navigation collapsed
 *
 * @returns {{type, payload}|{type: string, payload: *}}
 */
export function closeNavigation() {
  return setNavigationState(true);
}

/**
 * Set state of loading indicator
 *
 * @param state
 * @returns {{type, payload: *}}
 */
export function setLoadingIndicatorState(state) {
  return {
    type: LOADING_INDICATOR,
    payload: state
  }
}

/**
 * Show loading indicator
 *
 * @returns {{type, payload}|{type, payload: *}}
 */
export function showLoadingIndicator() {
  return setLoadingIndicatorState(true);
}

/**
 * Hide loading indicator
 *
 * @returns {{type, payload}|{type, payload: *}}
 */
export function hideLoadingIndicator() {
  return setLoadingIndicatorState(false);
}

/**
 * Show error indicator with
 * an descriptive text
 *
 * @param error
 * @returns {{type, payload: *}}
 */
export function error(error) {
  return {
    type: ERROR_INDICATOR,
    payload: error
  }
}