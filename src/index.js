import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink } from '@apollo/client';


const httpLink = new HttpLink({
  uri: 'https://api.poc.graphql.dev.vnplatform.com/graphql'
});


const client = new ApolloClient({
  uri: 'https://api.poc.graphql.dev.vnplatform.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYW5kaWRhdGVfbmFtZSI6IlNhbXVlbCIsImlzX2NhbmRpZGF0ZSI6dHJ1ZSwiaWF0IjoxNjg3OTc3MTA0LCJleHAiOjE2ODg0OTU1MDR9.Bfro7iGtbJXFIReb9x4dlnApEKEcOafN_Jj68VC2j7U'
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);