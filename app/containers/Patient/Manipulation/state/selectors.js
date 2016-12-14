/**
 * Patient Index Selectors
 *
 * This file includes memoized state selectors which performs much better
 * then default state accessors. You can create selectors for each purpose.
 * Long traversals should be avoided:
 *
 *      selectGlobal().get('a').get('b').get('c'); --> WRONG - Create a selector instead !!!
 *
 * For more information about selectors please have a look into the reselect documentation:
 *
 *        <https://github.com/reactjs/reselect>
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */

/**
 * IMPORTS
 */
import { createSelector } from 'reselect';

/**
 * ROOT: state.patientList
 */
const selectRoot = () => (state)  => state.get('patientIndex');

/**
 * DATA: state.patientList.data
 */
const selectData = () => createSelector(
  selectRoot(),
  (rootState) => rootState.get('data')
);

/**
 * VIEW: state.patientList.view
 */
const selectView = () => createSelector(
  selectRoot(),
  (rootState) => rootState.get('view')
);

/**
 * PATIENTS: state.patientList.data.list
 */
const selectPatientList = () => createSelector(
  selectData(),
  (dataState) => dataState.get('list')
);

/**
 * LOADING: state.patientList.data.loading
 */
const selectLoadingState = () => createSelector(
  selectData(),
  (dataState) => dataState.get('loading')
);

const selectFetchedState = () => createSelector(
  selectData(),
  (dataState) => dataState.get('fetched')
);

const selectErrorState = () => createSelector(
  selectData(),
  (dataState) => dataState.get('error')
);

export {
  selectRoot,
  selectData,
  selectView,
  selectPatientList,
  selectLoadingState,
  selectFetchedState,
  selectErrorState
};
