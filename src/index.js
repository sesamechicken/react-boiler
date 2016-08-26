import React from 'react'
import { render } from 'react-dom'
import App from './App'
import Foo from './components/Foo'

// CSS
import './css/index.css'

// Routes
import { Router, Route, browserHistory } from 'react-router'

const routes = (
<Router history={browserHistory}>
  <Route path='/' component={App} />
  <Route path='foo' component={Foo} />
</Router>
)

render(routes, document.getElementById('root'))
