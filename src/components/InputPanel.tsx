import { useState } from 'react'
import Dropdown from './Dropdown'
import products from '../testUtils/dummyData.json'

export type Product = {
	product_name: string
	product_code: string
	cost_price: number
	sell_price: SellPrice
}

export type SellPrice = {
	method: string
	value: number
	margin: number
}

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

const InputPanel = () => {
	const [calculation, setCalculation] = useState<Product>(init)

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

	return (
		<Dropdown
			onSelect={handleProductChange}
			options={products.map(product => product.product_name)}
		/>
	)
}

export default InputPanel
