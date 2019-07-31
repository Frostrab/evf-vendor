import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LoginPage, Test } from './pages'
function App() {
  return (
    <Router>
      <Route exact path="/" component={LoginPage} />
      <Route path="/Layout" component={Test} />
    </Router>
  )
}

export default App
