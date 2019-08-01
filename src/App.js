import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginPage, Layout, Content1 } from './pages'
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/Layout" component={Layout} />
        <PrivateRoute path="/Content1" component={Content1} />
        <Route path="*" component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default App
