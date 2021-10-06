import React from 'react'
import { NavConatiner, NavLink } from './StyledComponent'

const Nav = () => {
	return (
		<NavConatiner>
			<NavLink title="post" to="/">
				Post
			</NavLink>
			<NavLink title="about" to="/search">
				Search
			</NavLink>
			<NavLink title="about" to="/about">
				About
			</NavLink>
		</NavConatiner>
	)
}

export default Nav
