import renderOptions from '../utils/renderOptions'

type DropdownProps = {
	onSelect: (selectedOption: string) => void
	options: string[]
}

const Dropdown: React.FC<DropdownProps> = ({ onSelect, options }) => {
	const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		onSelect(event.target.value)
	}

	return (
		<>
			<label htmlFor="product-choice">Product</label>
			<input
				list="products"
				placeholder="Select product"
				name="product-choice"
				id="product-choice"
				onChange={handleSelect}
			></input>
			<datalist id="products">{renderOptions(options)}</datalist>
		</>
	)
}

export default Dropdown
