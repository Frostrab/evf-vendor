import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginPage, Content1, Inbox } from './pages'
import { EveForm } from './components'

import { RouterPath } from './router'
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/Inbox" component={Content1} />
        <RouterPath />
        <Route path="*" component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default App
