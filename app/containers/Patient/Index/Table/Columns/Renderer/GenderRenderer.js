
/**
 * Gender Renderer
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 * @param params
 */
export default function genderRenderer(params) {
  return (params.value === 'Male') ? `<i class="fa fa-mars"></i>`
                            : `<i class="fa fa-venus"></i>`;
}