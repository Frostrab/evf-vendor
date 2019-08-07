import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginPage, Content1 } from './pages'
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/Inbox" component={Content1} />
        <PrivateRoute path="/CA_Group/CA_MGT_Group/CA" component={Content1} />
        <Route path="*" component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default App
