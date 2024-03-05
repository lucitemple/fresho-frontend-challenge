import { describe, expect, test } from 'vitest'
import calculatePrice from './calculatePrice'

describe('Given the calculatePrice function is called with props', () => {
	test('when cost price & margin are positive numbers  it should calculate the price correctly', () => {
		const costPrice = 100
		const margin = 20
		const expectedPrice = 125 // 100 / (1 - 0.20) = 125
		const calculatedPrice = calculatePrice(costPrice, margin)
		expect(calculatedPrice).toBe(expectedPrice)
	})

	test('when cost price is zero and margin is a positive numbe it should calculate the price correctly', () => {
		const costPrice = 0
		const margin = 20
		const expectedPrice = 0 // 0 / (1 - 0.20) = 0
		const calculatedPrice = calculatePrice(costPrice, margin)
		expect(calculatedPrice).toBe(expectedPrice)
	})

	test('when cost price is a positive number and margin is zero it should calculate the price correctly', () => {
		const costPrice = 100
		const margin = 0
		const expectedPrice = 100 // 100 / (1 - 0) = 100
		const calculatedPrice = calculatePrice(costPrice, margin)
		expect(calculatedPrice).toBe(expectedPrice)
	})

	test('when both cost price and margin are zero it should calculate the price correctly', () => {
		const costPrice = 0
		const margin = 0
		const expectedPrice = 0 // 0 / (1 - 0) = 0
		const calculatedPrice = calculatePrice(costPrice, margin)
		expect(calculatedPrice).toBe(expectedPrice)
	})

	test.skip('when cost price is a negative number returns NaN (?)', () => {
		const costPrice = -100
		const margin = 20
		const calculatedPrice = calculatePrice(costPrice, margin)
		expect(calculatedPrice).toBeNaN()
	})

	test.skip('when margin is a negative number returns NaN (?)', () => {
		const costPrice = 100
		const margin = -20
		const calculatedPrice = calculatePrice(costPrice, margin)
		expect(calculatedPrice).toBeNaN()
	})

	test('when cost price is NaN returns NaN', () => {
		const costPrice = NaN
		const margin = 20
		const calculatedPrice = calculatePrice(costPrice, margin)
		expect(calculatedPrice).toBeNaN()
	})

	test('when margin is NaN returns NaN', () => {
		const costPrice = 100
		const margin = NaN
		const calculatedPrice = calculatePrice(costPrice, margin)
		expect(calculatedPrice).toBeNaN()
	})
})
