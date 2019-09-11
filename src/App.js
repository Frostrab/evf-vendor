import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginPage, Content1, Inbox } from './pages'

import SummaryEvaluationTemplate from './pages/SummaryEvaluation'

import Evaluation from './pages/evaluation/evaluation_management/Evaluation'
import SummaryEvaluationList from './pages/evaluation/evaluation_management/SummaryEvaluation'

import Criteria from './pages/evaluation/evaluation_setup/Criteria'
import EvaluationTemplate from './pages/evaluation/evaluation_setup/EvaluationTemplate'
import Grade from './pages/evaluation/evaluation_setup/Grade'
import LevelPoint from './pages/evaluation/evaluation_setup/LevelPoint'
import Performance from './pages/evaluation/evaluation_setup/Performance'
import PerformanceGroup from './pages/evaluation/evaluation_setup/PerformanceGroup'
import Period from './pages/evaluation/evaluation_setup/Period'

import VendorFilter from './pages/vendor/VendorFilter'
import VendorProfile from './pages/vendor/VendorProfile'
// import { Evaluation, SummaryEvaluationList } from './pages/evaluation'

import { RouterPath } from './router'
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/Inbox" component={Content1} />
        <PrivateRoute path="/spe-sum" component={SummaryEvaluationTemplate} />

        <PrivateRoute
          path="/Evaluation_Group/Evaluation_MGT_Group/Evaluation"
          component={Evaluation}
        ></PrivateRoute>
        <PrivateRoute
          path="/Evaluation_Group/Evaluation_MGT_Group/SummaryEvaluation"
          component={SummaryEvaluationList}
        ></PrivateRoute>
        {/* eval  setup*/}
        <PrivateRoute
          path="/Evaluation_Group/Evaluation_Setup_Group/Criteria"
          component={Criteria}
        />
        <PrivateRoute
          path="/Evaluation_Group/Evaluation_Setup_Group/EvaluationTemplate"
          component={EvaluationTemplate}
        />
        <PrivateRoute
          path="/Evaluation_Group/Evaluation_Setup_Group/Grade"
          component={Grade}
        />
        <PrivateRoute
          path="/Evaluation_Group/Evaluation_Setup_Group/LevelPoint"
          component={LevelPoint}
        />
        <PrivateRoute
          path="/Evaluation_Group/Evaluation_Setup_Group/Performance"
          component={Performance}
        />
        <PrivateRoute
          path="/Evaluation_Group/Evaluation_Setup_Group/PerformanceGroup"
          component={PerformanceGroup}
        />
        <PrivateRoute
          path="/Evaluation_Group/Evaluation_Setup_Group/Period"
          component={Period}
        />

        <PrivateRoute
          path="/Vendor_Group/VendorFilter"
          component={VendorFilter}
        />
        <PrivateRoute
          path="/Vendor_Group/VendorProfile"
          component={VendorProfile}
        />
        <RouterPath />
        <Route path="*" component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default App
