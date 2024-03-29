import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  ApolloClient, HttpLink, InMemoryCache, ApolloProvider,
} from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql.anilist.co',
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
