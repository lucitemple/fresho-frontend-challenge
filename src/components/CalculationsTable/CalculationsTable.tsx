import { Table, TableContainer, Td, Th, Tr } from './CalculationsTable.styles'

type CalculationsTableProps = {
	tableItems: React.ReactNode[][]
}

const CalculationsTable: React.FC<CalculationsTableProps> = ({
	tableItems,
}) => {
	if (!tableItems) {
		return null
	}

	return (
		<TableContainer>
			<Table>
				<thead>
					<Tr>
						<Th>Product</Th>
						<Th>Code</Th>
						<Th>Cost</Th>
						<Th>Price</Th>
						<Th>Margin</Th>
						<Th>Method</Th>
					</Tr>
				</thead>
				<tbody>
					{tableItems.map((row, index) => (
						<Tr key={index}>
							{row.map((cell, index) => (
								<Td key={index}>{cell}</Td>
							))}
						</Tr>
					))}
				</tbody>
			</Table>
		</TableContainer>
	)
}

export default CalculationsTable
