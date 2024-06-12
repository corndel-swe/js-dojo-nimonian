/**
 * Determines the letter grade based on a numeric score.
 * @param {number} score - The numeric score.
 * @returns {string} The letter grade.
 *
 * Example: determineGrade(85) should return 'B'.
 */
export function determineGrade(score) {
  // TODO: Determine the letter grade based on the score
  // 90-100: 'A'
  // 80-89: 'B'
  // 70-79: 'C'
  // 60-69: 'D'
  // Below 60: 'F'

  if (score >= 90) return 'A'
  if (score >= 80) return 'B'
  if (score >= 70) return 'C'
  if (score >= 60) return 'D'
  return 'F'
}
