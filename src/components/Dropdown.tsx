
const renderOptions = (options: string[]) => {
	if (!options || options.length === 0) {
		return null
	}

	return options.map(optionItem => (
		<option key={optionItem} value={optionItem}>
			{optionItem}
		</option>
	))
}

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
