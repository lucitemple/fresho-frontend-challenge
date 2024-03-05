import { describe, expect, test, vi } from 'vitest'
import { userEvent } from '@testing-library/user-event'

import { render, screen } from '@testing-library/react'
import Dropdown from './Dropdown'

const products = [
	{ product_name: 'Fuji apples' },
	{ product_name: 'Cavendish bananas' },
	{ product_name: 'Navel oranges' },
]

const handleProductChange = () => vi.mock;
    
    describe('Given the Dropdown component renders', () => {
		test('it should have an input field for Product', () => {
			render(
				<Dropdown
					onSelect={handleProductChange}
					options={products.map(product => product.product_name)}
				/>,
			)

			const productInput = screen.getByRole('combobox')
			expect(productInput).toBeInTheDocument()

			const productLabel = screen.getByText('Product')
			expect(productLabel).toBeInTheDocument()
		})

		describe('when the dropdown is selected', () => {
			test.each(products)('then all options should be rendered %p', product => {
			render(
				<Dropdown
					onSelect={handleProductChange}
					options={products.map(product => product.product_name)}
				/>,
			)
				userEvent.click(screen.getByRole('combobox'))

				const option = screen.getByText(product.product_name)
				expect(option).toBeInTheDocument()
			})
		})

		describe('when an option is selected', () => {
			test.todo('then it should be saved into state')
		})
	})
