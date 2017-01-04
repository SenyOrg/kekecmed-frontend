/**
 * Date Utils
 *
 * @auhtor Selcuk Kekec
 */


/**
 * IMPORTS
 */
import moment from 'moment';

/**
 * Calculate age by date string
 *
 * @param dateString
 */
export function age(dateString) {
  return Math.abs( new Date(Date.now() - new Date(dateString).getTime()).getUTCFullYear() - 1970);
}

/**
 * Get difference from date to actual time
 *
 * @param string date
 * @returns {*}
 */
export function differenceAsString(date) {
  return moment().to(moment(date));
}