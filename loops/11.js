/**
 * Calculates the sum of all elements in an array.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The sum of all elements in the array.
 *
 * @example
 * // returns 15
 * sumArray([1, 2, 3, 4, 5]);
 */
export function sumArray(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
