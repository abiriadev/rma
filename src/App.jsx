import React from 'react'
import { Home } from './routes/Home'
import './App.css'
import { HashRouter, Route } from 'react-router-dom'
import { About } from './routes/About'
import { Navigation } from './components/Navigation'
import { Detail } from './components/Detail'

export const App = () => {
	return (
		<HashRouter>
			<Navigation />
			<Route path='/' component={Home} exact={true} />
			<Route path='/about' component={About} />
			<Route path='/page' component={Detail} />
		</HashRouter>
	)
}
