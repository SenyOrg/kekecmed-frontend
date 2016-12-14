/**
 * Date Utils
 *
 * @auhtor Selcuk Kekec
 */

/**
 * Calculate age by date string
 *
 * @param dateString
 */
export function age(dateString) {
  return Math.abs( new Date(Date.now() - new Date(dateString).getTime()).getUTCFullYear() - 1970);
 }