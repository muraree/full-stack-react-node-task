import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from '../components/Dashboard'

const AppRoutes = () => (
  <Router>
    <Switch>
    <Route exact path="/" component={Dashboard} />
    </Switch>
  </Router>
)

export default AppRoutes
