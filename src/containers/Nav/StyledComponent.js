import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavLink = styled(Link)`
	padding: 1em 1.5em;
	text-decoration: none;
	text-transform: uppercase;
	font-weight: 600;
	color: black;
	:hover {
		/* text-decoration: underline; */
		/* color: blue; */
	}
`

export const NavConatiner = styled.div`
	display: flex;
	justify-content: center;
	font-family: SpaceMono;
`
