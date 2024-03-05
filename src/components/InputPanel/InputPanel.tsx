import { useState } from 'react'
import Dropdown from '../Dropdown'
import products from '../../testUtils/dummyData.json'
import NumberInput from '../NumberInput'
import calculateMarginPercent from '../../utils/calculateMarginPercent'
import calculatePrice from '../../utils/calculatePrice'
import InputPanelContainer from './InputPanel.styles'
import { Product } from '../../types'

const init: Product = {
	product_name: '',
	product_code: '',
	cost_price: 0,
	sell_price: {
		method: '',
		value: 0,
		margin: 0,
	},
}

const InputPanel: React.FC<{
	addCalculation: (calculation: Product) => void
}> = ({ addCalculation }) => {
	const [calculation, setCalculation] = useState<Product>(init)
	const { product_name, cost_price, sell_price } = calculation
	const { value, margin } = sell_price

	const handleProductChange = (productName: string) => {
		const product_code =
			products.find(product => product.product_name === productName)
				?.product_code || ''
		setCalculation(prevCalculation => ({
			...prevCalculation,
			product_name: productName,
			product_code,
		}))
	}

	const handleCostPriceChange = (cost_price: string | number) => {
		setCalculation(prevCalculation => ({
			...prevCalculation,
			cost_price:
				typeof cost_price === 'string' ? parseFloat(cost_price) : cost_price,
		}))
	}

	const handleSellPriceChange = (newValue: string | number) => {
		const value = Number(newValue)
		const margin = calculateMarginPercent(cost_price, value)
		setCalculation(prevCalculation => ({
			...prevCalculation,
			sell_price: {
				...prevCalculation.sell_price,
				value,
				margin,
				method: 'value',
			},
		}))
	}
	const handleMarginChange = (newMargin: string | number) => {
		const margin = Number(newMargin)
		const value = calculatePrice(cost_price, margin)
		setCalculation(prevCalculation => ({
			...prevCalculation,
			sell_price: {
				...prevCalculation.sell_price,
				value,
				margin,
				method: 'margin',
			},
		}))
	}

	const handleSubmit = () => {
		addCalculation(calculation)
		setCalculation(init)
	}

	return (
		<InputPanelContainer>
			<Dropdown
				onSelect={handleProductChange}
				options={products.map(product => product.product_name)}
			/>
			<NumberInput
				label="Cost"
				placeholder="0.00"
				value={calculation.cost_price}
				leftSection={'$'}
				rightSection={'/kg'}
				onChange={handleCostPriceChange}
			/>
			<NumberInput
				label="Price"
				placeholder="0.00"
				value={value}
				leftSection={'$'}
				rightSection={'/kg'}
				onChange={handleSellPriceChange}
				disabled={!product_name}
			/>
			<NumberInput
				label="Margin"
				placeholder="0"
				value={margin}
				rightSection={'%'}
				onChange={handleMarginChange}
				disabled={!product_name || cost_price == 0}
			/>
			<button
				onClick={handleSubmit}
				disabled={value == 0 || cost_price == 0}
				color={'green'}
			>
				Save
			</button>
		</InputPanelContainer>
	)
}

export default InputPanel
