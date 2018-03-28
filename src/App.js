// Dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

// Components & Containers
import "./App.css";
import Home from "./containers/Home/";

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(data => console.log({ data }));

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
        {/* <Route path="/about" component={About}/> */}
      </div>
    </Router>
  </ApolloProvider>
);

export default App;
