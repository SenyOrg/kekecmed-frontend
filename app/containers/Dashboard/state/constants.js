/**
 * Dashboard Constants
 *
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */

export const FETCH_WIDGETS = 'kekecmed/dashboard/widgets/fetch';
export const FETCH_WIDGETS_PENDING = 'kekecmed/dashboard/widgets/fetch/pending';
export const FETCH_WIDGETS_FULFILLED = 'kekecmed/dashboard/widgets/fetch/fulfilled';
export const FETCH_WIDGETS_REJECTED = 'kekecmed/dashboard/widgets/fetch/rejected';

