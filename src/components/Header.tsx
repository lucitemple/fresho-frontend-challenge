import { styled } from 'styled-components'
import freshoLogo from '../../fresho.svg'

const Container = styled.header`
	display: flex;
	border-bottom: 1px solid green;
	padding-bottom: 1rem;
	height: 6rem;

	img {
		height: 90%;
		margin-right: 1rem; 
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
