import React from 'react'
import store from './redux/store'
import { Provider } from 'react-redux'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'

import Router from './router'

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:3001/graphql' }),
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router />
    </Provider>
  </ApolloProvider>
)

export default App
