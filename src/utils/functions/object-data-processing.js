/**
 * Check if all key-values in obj1 match some of the key values in obj2
 * @param {Object} obj1 = {a: 1, b: 2, c: 3};
 * @param {Object} obj2 = {a: 1, b: 2, c: 3, d: 5};
 * i.e. - if all keys and values in obj1
 * don't correspond to their counterparts in obj2, return false
 */
export function checkIfAllIn1MatchSomeIn2(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  return obj1Keys.every((key1) =>
    obj2Keys.some(() => obj1[key1] === obj2[key1])
  );
}
