import React, { Component } from 'react'
import store from './redux/store'
import { Provider } from 'react-redux'

import HomePage from './pages/home'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    )
  }
}

export default App
