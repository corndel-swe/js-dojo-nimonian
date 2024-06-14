/**
 * Remove the first rating from the array.
 * @param {number[]} ratings - The array of ratings.
 * @returns {number[]} The updated array of ratings.
 * @example
 * removeFirstRating([4.5, 3.8, 4.0, 2.9, 4.1]); // returns [3.8, 4.0, 2.9, 4.1]
 */
export function removeFirstRating(ratings) {
  ratings.shift()
  return ratings
}
