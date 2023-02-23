import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Dashboard from './pages/Dashboard';

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache({
    addTypename: false,
    typePolicies: {
      Query: {
        fields: {
          updates: {
            merge(existing, incoming) {
              return incoming
            },
          },
        },
      },
    },
  })
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Dashboard />
    </ApolloProvider>
  </React.StrictMode>
);
