/**
 * Calculates the sum of elements in each row of a nested array.
 *
 * @param {number[][]} arr - The input nested array of numbers.
 * @returns {number[]} - An array of sums for each row.
 *
 * @example
 * // returns [6, 9, 6]
 * rowSums([[1, 2, 3], [4, 5], [6]]);
 */
export function rowSums(arr) {
  let sums = []
  for (let i = 0; i < arr.length; i++) {
    let sum = 0
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j]
    }
    sums.push(sum)
  }
  return sums
}
