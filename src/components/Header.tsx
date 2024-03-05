import { styled } from 'styled-components'
import freshoLogo from '../../fresho.svg'

const Container = styled.header`
	display: flex;
	border-bottom: 1px solid green;
	// align-items: flex-start;
    padding-bottom: 1rem;
	height: 6rem;

	img {
		height: 90%; /* Ensure the logo takes the full height of the header */
		margin-right: 1rem; /* Adjust margin as needed */
	}
`

const Header = () => (
	<Container>
		<a href="" target="_blank">
			<img src={freshoLogo} alt="Fresho logo" />
		</a>
	</Container>
)

export default Header
