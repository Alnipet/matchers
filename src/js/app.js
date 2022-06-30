/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
export default function playersHealtStatusSort(options) {
  options.sort((a, b) => b.health - a.health);
  return options;
}
