import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Pages from './pages'

const apolloClient = new ApolloClient({
  // apollo server url
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <ApolloProvider client={apolloClient}>
        <Pages />
      </ApolloProvider>
    </StrictMode>,
  )
