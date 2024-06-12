/**
 * Returns a string containing the numbers from 1 to n.
 *
 * @param {number} num - The upper limit.
 * @returns {string} - The string containing the numbers from 1 to n.
 *
 * @example
 * // returns "12345"
 * stringOfNums(5);
 */
export function stringOfNums(num) {
  let result = ''
  for (let i = 1; i <= num; i++) {
    result += i.toString()
  }
  return result
}
