/**
 * Calculates the selling price based on the cost price and margin.
 *
 * @param {number} cost_price - The cost price of the product.
 * @param {number} margin - The profit margin as a percentage.
 * @returns {number} The calculated selling price.
 */

const calculatePrice = (cost_price: number, margin: number): number => {
	const newPrice = cost_price / (1 - margin / 100)
	return Math.round(newPrice * 100) / 100
}

export default calculatePrice
