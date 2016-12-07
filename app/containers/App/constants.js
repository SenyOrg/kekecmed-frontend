/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

/**
 * App Constants
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */

export const DEFAULT_LOCALE = 'en';

/**
 * VIEW related action constants
 *
 * @type {string}
 */
export const NAVIGATION_STATE             = 'kekecmed/app/view/navigation/state';
export const NAVIGATION_TOGGLE            = 'kekecmed/app/view/navigation/collapse';
export const CONTROL_SIDEBAR_TOGGLE       = 'kekecmed/app/view/controlsidebar/collapse';
export const CONTROL_SIDEBAR_ACTIVATE_TAB = 'kekecmed/app/view/controlsidebar/activatetab';
export const UPDATE_BREADCRUMB            = 'kekecmed/app/view/breadcrumb/update';
export const ADD_TO_BREADCRUMB            = 'kekecmed/app/view/breadcrumb/add';
export const UPDATE_PAGE_HEADER           = 'kekecmed/app/view/pageheader/update';
export const UPDATE_PAGE_SUB_HEADER       = 'kekecmed/app/view/pagesubheader/update';
export const UPDATE_HEADER                = 'kekecmed/app/view/header/update';
export const LOADING_INDICATOR            = 'kekecmed/app/view/loading';
export const ERROR_INDICATOR              = 'kekecmed/app/view/error';