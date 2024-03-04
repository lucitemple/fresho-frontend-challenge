import { describe, test, expect } from 'vitest'
import App from './App'
import { render, screen } from '@testing-library/react'

// import { render } from './testUtils/render'

describe('Given the test suite runs', () => {
	test('true to be true', () => {
		expect(true).toBe(true)
	})

	test('false to be false', () => {
		expect(false).toBe(false)
	})
})

describe('Given the App is rendered', () => {
	test('then it should have a Price tool heading', async () => {
		render(<App />)

		expect(
			screen.getByRole('heading', { name: /price tool/i }),
		).toBeInTheDocument()
	})
})
