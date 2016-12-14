/**
 * Dashboard Selectors
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
 * @info The reducer root is 'dashboard'
 */

/**
 * [ROOT]: state.dashboard
 */
const selectRoot = () => (state)  => state.get('dashboard');

/**
 * DATA: root.data
 */
const selectData = () => createSelector(
  selectRoot(),
  (rootState) => rootState.get('data')
);

/**
 * VIEW: root.view
 */
const selectView = () => createSelector(
  selectRoot(),
  (rootState) => rootState.get('view')
);

export {
  selectRoot,
  selectData,
  selectView,
};