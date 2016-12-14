/**
 * IMPORTS
 */
import {age} from 'utils/date';

/**
 * Age Renderer
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 * @param params
 */
export default function ageRenderer(params) {
  return `${params.value} (${age(params.value)})`;
}