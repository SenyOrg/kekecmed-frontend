/**
 * This file provides some helper methods for
 * the table component.
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */

/**
 * Extract cell properties out of the main component props
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 * @param properties
 */
export function getCellProperties(properties) {
  return {
    width: properties.width,
    height: properties.height,
    style: properties.style,
    className: properties.className
  }
}