import styled from 'styled-components'
import logo from '../../Images/logo.png'

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0em 3em 1.125em 1.5em;
`
export const IconContainer = styled.a`
	width: 5rem;
	height: 5rem;
`
export const Icon = styled.img.attrs((props) => ({
	src: props.src || logo
}))`
	height: 100%;
`
