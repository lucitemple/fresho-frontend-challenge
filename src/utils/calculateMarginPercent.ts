/**
 * Calculates the profit margin percentage based on the cost price and selling price.
 *
 * @param {number} cost_price - The cost price of the product.
 * @param {number} sell_price - The selling price of the product.
 * @returns {number} The calculated profit margin percentage.
 */

const calculateMarginPercent = (cost_price: number, sell_price: number) => {
	const newMargin = ((sell_price - cost_price) / sell_price) * 100
	return Math.round(newMargin)
}

export default calculateMarginPercent
