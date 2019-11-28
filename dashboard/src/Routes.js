import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './Components/Layout'
import Dashboard from './Components/Dashboard'
import Listings from './Components/Listings'

const AppRoutes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/listings" component={Listings} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Layout>
  </Router>
)

export default AppRoutes
