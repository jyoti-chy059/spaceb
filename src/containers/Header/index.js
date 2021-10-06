import React from 'react'
import { HeaderContainer, IconContainer, Icon } from './StyledComponents'
import logo from '../../Images/logo.png'
import Nav from '../Nav'

/**
 *
 * @returns logo , blog link
 * pass nav link data to Nav
 */
const Header = () => {
	return (
		<HeaderContainer>
			<IconContainer title="Home" href="/">
				<Icon src={logo} />
			</IconContainer>
			<Nav />
		</HeaderContainer>
	)
}

export default Header
