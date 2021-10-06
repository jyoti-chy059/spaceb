import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../Footer'
import Header from '../Header'

const Layout = (props) => {
	return (
		<>
			<Header />
			{props.children}
			<Footer />
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}
export default Layout
