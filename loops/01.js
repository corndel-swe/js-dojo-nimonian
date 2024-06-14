/**
 * Finds the sum of all numbers smaller than the given input.
 *
 * @param {number} input - The input number.
 * @returns {number} - The sum of all numbers smaller than the input.
 *
 * @example
 * // returns 10
 * sumSmallerNumbers(5);
 */
export function sumSmallerNumbers(input) {
  let sum = 0
  for (let i = 1; i < input; i++) {
    sum += i
  }
  return sum
}
