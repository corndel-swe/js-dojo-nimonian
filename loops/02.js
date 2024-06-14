/**
 * Finds the product of all numbers smaller than the given input.
 *
 * @param {number} input - The input number.
 * @returns {number} - The product of all numbers smaller than the input.
 *
 * @example
 * // returns 24
 * productSmallerNumbers(5);
 */
export function productSmallerNumbers(input) {
  let product = 1
  for (let i = 1; i < input; i++) {
    product *= i
  }
  return product
}
