/**
 * Generates an array of React <option> elements based on the provided array of options.
 *
 * @param {string[]} options - An array of strings representing the options to render.
 * @returns {JSX.Element[] | null} An array of React <option> elements, each containing a value  and key from the input array, or null if input is 0 or undefined.
 */

const renderOptions = (options: string[]): JSX.Element[] | null => {
	if (!options || options.length === 0) {
		return null
	}

	return options.map(optionItem => (
		<option key={optionItem} value={optionItem}>
			{optionItem}
		</option>
	))
}

export default renderOptions
