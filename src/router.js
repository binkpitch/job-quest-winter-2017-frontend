import React from 'react'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import Home from './pages/home'
import TestApi from './pages/testApi'

const routerHistory = createHistory()

const router = () => {
  return (
    <ConnectedRouter history={routerHistory}>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/testApi' component={TestApi} />
      </div>
    </ConnectedRouter>
  )
}

export default router
