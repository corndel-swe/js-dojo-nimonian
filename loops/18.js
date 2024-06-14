/**
 * Filters out products that are more expensive than a given price.
 *
 * @param {number[]} prices - The array of product prices.
 * @param {number} maxPrice - The maximum price to include.
 * @returns {number[]} - The array of prices less than or equal to the maximum price.
 *
 * @example
 * // returns [50, 100]
 * filterExpensiveProducts([50, 150, 100, 200], 100);
 */
export function filterExpensiveProducts(prices, maxPrice) {
  let filtered = []
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= maxPrice) {
      filtered.push(prices[i])
    }
  }
  return filtered
}
