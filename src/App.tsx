import { useEffect, useState } from 'react'
import './App.css'
import InputPanel from './components/InputPanel/InputPanel'
import { Product } from './types'
import CalculationsTable from './components/CalculationsTable/CalculationsTable'
import Header from './components/Header'

function App() {
	const [calculations, setCalculations] = useState<React.ReactNode[][]>([])

	useEffect(() => {
		const storedCalculations = localStorage.getItem('calculations')
		if (storedCalculations) {
			setCalculations(JSON.parse(storedCalculations))
		}
	}, [])

	const addCalculation = (newCalculation: Product) => {
		const { product_name, product_code, cost_price, sell_price } =
			newCalculation
		const { value, margin, method } = sell_price

		setCalculations(prevCalculations => {
			const updatedCalculations = [
				...prevCalculations,
				[product_name, product_code, cost_price, value, margin, method],
			]
			localStorage.setItem('calculations', JSON.stringify(updatedCalculations))
			return updatedCalculations
		})
	}
	return (
		<> <Header/>
			<h1>Price Tool</h1>
			<InputPanel addCalculation={addCalculation} />
			<h2>Previous Price Calculations</h2>
			<CalculationsTable tableItems={calculations} />
		</>
	)
}

export default App
