/**
 * Swaps to elements of an array.
 * First param is the target array, the second is an array with the 2 items to swap
 * @param {Array} arr - Target array
 * @param {Array} param1 [a,b] - The two items to swap
 */
export function swapArrayElements(arr, [a, b]) {
  const indexOfA = arr.indexOf(a);
  const indexOfB = arr.indexOf(b);

  if (!arr) return null;
  if (!a || !b || !arr[indexOfA] || !arr[indexOfB]) return arr;

  arr = [...arr];

  const memoA = arr[indexOfA];
  arr[indexOfA] = arr[indexOfB];
  arr[indexOfB] = memoA;

  return arr;
}
