/**
 * Calculates the total engagement (likes, comments, shares) for each post.
 *
 * @param {number[][]} posts - The array of posts, each represented by an array [likes, comments, shares].
 * @returns {number[]} - The array of total engagements for each post.
 *
 * @example
 * // returns [15, 30]
 * calculateEngagement([[5, 5, 5], [10, 10, 10]]);
 */
export function calculateEngagement(posts) {
  let engagements = []
  for (let i = 0; i < posts.length; i++) {
    let total = 0
    for (let j = 0; j < posts[i].length; j++) {
      total += posts[i][j]
    }
    engagements.push(total)
  }
  return engagements
}
