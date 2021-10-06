import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './containers/About'
import Home from './containers/Home'
import Layout from './containers/Layout'
import Search from './containers/Search'

const AppRouter = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route path="/about" render={() => <About />} />
					<Route path="/search" render={() => <Search />} />
					<Route exact path="/" render={() => <Home />} />
				</Switch>
			</Layout>
		</Router>
	)
}

export default AppRouter
