import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home'
import Issue from './pages/issue'
import TestApi from './pages/testApi'

const router = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/issue/:id' component={Issue} />
        <Route exact path='/testApi' component={TestApi} />
      </div>
    </BrowserRouter>
  )
}

export default router
