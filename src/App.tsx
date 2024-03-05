import { useState } from 'react'
import './App.css'
import InputPanel from './components/InputPanel/InputPanel'
import { Product } from './types'

function App() {
	const [calculations, setCalculations] = useState<React.ReactNode[][]>([])

	const addCalculation = (newCalculation: Product) => {
		const { product_name, product_code, cost_price, sell_price } =
			newCalculation
		const { value, margin, method } = sell_price

		setCalculations(prevCalculations => {
			const updatedCalculations = [
				...prevCalculations,
				[product_name, product_code, cost_price, value, margin, method],
			]
			return updatedCalculations
		})
	}
	return (
		<>
			<h1>Price Tool</h1>
			<InputPanel addCalculation={addCalculation} />
		</>
	)
}

export default App
