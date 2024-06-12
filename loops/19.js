/**
 * Counts the number of positive reviews in an array of reviews.
 *
 * @param {number[]} reviews - The array of review ratings (1-5).
 * @returns {number} - The count of positive reviews (4 and 5 stars).
 *
 * @example
 * // returns 3
 * countPositiveReviews([5, 3, 4, 2, 5]);
 */
export function countPositiveReviews(reviews) {
  let count = 0
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i] === 4 || reviews[i] === 5) {
      count++
    }
  }
  return count
}
