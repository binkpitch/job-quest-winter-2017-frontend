import React from 'react'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import HomePage from './pages/homePage'

const routerHistory = createHistory()

const router = () => {
  return (
    <ConnectedRouter history={routerHistory}>
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    </ConnectedRouter>
  )
}

export default router
