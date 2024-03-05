import styled from 'styled-components'

export const TableContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 10px;
`

export const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
`

export const Th = styled.th`
	border: 1px solid #ddd;
	padding: 8px;
	text-align: left;
	background-color: #f2f2f2;
`

export const Td = styled.td`
	text-align: left;
	border: 1px solid #ddd;
	padding: 8px;
`

export const Tr = styled.tr`
	&:nth-child(even) {
		background-color: #f2f2f2;
	}
`
