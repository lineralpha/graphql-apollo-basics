import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pages from './pages'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Header } from './components/Hheader';
import { Footer } from './components/Footer';

const apolloClient = new ApolloClient({
  // apollo server url
  uri: `http://localhost:${process.env.PORT || 4000}`,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <ApolloProvider client={apolloClient}>
        <Header title='header'/>
        <Pages />
        <Footer title='footer' />
      </ApolloProvider>
    </StrictMode>,
  )
