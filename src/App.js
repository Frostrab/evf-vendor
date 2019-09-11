import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginPage, Content1, Inbox } from './pages'
import SummaryEvaluation from './pages/SummaryEvaluation'

import { RouterPath } from './router'
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/Inbox" component={Content1} />
        <PrivateRoute path="/spe-sum" component={SummaryEvaluation} />
        <RouterPath />
        <Route path="*" component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default App
