import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
const LoginPage = Loadable({
  loader: () => import('./components/Login'),
  loading: () => null,
})
const LayoutPage = Loadable({
  loader: () => import('./components/layout'),
  loading: () => null,
})
function App() {
  return (
    <Router>
      <Route exact path="/" component={LoginPage} />
      <Route path="/Layout" component={LayoutPage} />
    </Router>
  )
}

export default App
