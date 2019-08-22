import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginPage, Content1 } from './pages'
import Evaluation from './pages/evaluation/evaluation_management/Evaluation'
import SummaryEvaluation from './pages/evaluation/evaluation_management/SummaryEvaluation'
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/Inbox" component={Content1} />
        <PrivateRoute
          path="/Evaluation_Group/Evaluation_MGT_Group/Evaluation"
          component={Evaluation}
        />
        <PrivateRoute
          path="/Evaluation_Group/Evaluation_MGT_Group/SummaryEvaluation"
          component={SummaryEvaluation}
        />
        <Route path="*" component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default App
