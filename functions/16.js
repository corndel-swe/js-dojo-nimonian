/**
 * Checks if a year is a leap year.
 * @param {number} year - The year to check.
 * @returns {boolean} True if the year is a leap year, false otherwise.
 *
 * Example: isLeapYear(2020) should return true.
 */
export function isLeapYear(year) {
  // TODO: Return true if year is divisible by 4, but if divisible by 100 must also be divisible by 400
  if (year % 100 === 0) {
    return year % 400 === 0
  }

  return year % 4 === 0
}
