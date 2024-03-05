import renderOptions from '../../utils/renderOptions'
import {Input } from './Dropdown.styles'
import { Container, Label, } from '../common/styles'

type DropdownProps = {
	onSelect: (selectedOption: string) => void
	options: string[]
}

const Dropdown: React.FC<DropdownProps> = ({ onSelect, options }) => {
	const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		onSelect(event.target.value)
	}

	return (
		<Container>
			<Label htmlFor="product-choice">Product</Label>
			<Input
				list="products"
				placeholder="Select product"
				name="product-choice"
				id="product-choice"
				onChange={handleSelect}
			></Input>
			<datalist id="products">{renderOptions(options)}</datalist>
		</Container>
	)
}

export default Dropdown
