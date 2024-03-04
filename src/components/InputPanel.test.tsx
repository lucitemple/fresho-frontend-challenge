import { describe, expect, test } from 'vitest'
import InputPanel from './InputPanel'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Given the input panel renders', () => {
	test('it should have an input field for Product', () => {
		render(<InputPanel />)

		const productInput = screen.getByRole('combobox')

		expect(productInput).toBeInTheDocument()
	})

	describe('when a user selects a product option', () => {
		test('then it should be rendered', async () => {
			render(<InputPanel />)

			const productInput = screen.getByRole('combobox')
			userEvent.click(productInput)

			const option = await screen.findByRole('option', {
				name: /Cavendish bananas/i,
			})
			userEvent.click(option)

			expect(screen.getByText(/Cavendish bananas/i)).toBeInTheDocument()
		})
	})
})
