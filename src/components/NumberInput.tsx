type NumberInputProps = {
	label: string
	placeholder?: string
	value: number
	leftSection?: string
	rightSection?: string
	disabled?: boolean
	allowDecimal?: boolean
	onChange: (value: number) => void
}

const NumberInput: React.FC<NumberInputProps> = ({
	label,
	placeholder,
	value,
	leftSection,
	rightSection,
	disabled,
	onChange,
}) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = parseFloat(event.target.value)
		if (!isNaN(inputValue) || event.target.value === '') {
			onChange(inputValue)
		}
	}

	return (
		<div>
			<label>{label}</label>
			<div>
				{leftSection && <span>{leftSection}</span>}
				<input
					placeholder={placeholder}
					value={value === 0 ? '' : value.toString()}
					disabled={disabled}
					type={'number'}
					onChange={handleChange}
				/>
				{rightSection && <span>{rightSection}</span>}
			</div>
		</div>
	)
}

export default NumberInput
