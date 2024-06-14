/**
 * Calculates the average of all elements in an array.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The average of the elements in the array.
 *
 * @example
 * // returns 3
 * calculateAverage([1, 2, 3, 4, 5]);
 */
export function calculateAverage(arr) {
  if (arr.length === 0) return 0
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}
