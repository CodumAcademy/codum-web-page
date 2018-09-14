import React from "react";
import Head from "next/head";
import cookies from "next-cookies";
import { getDataFromTree } from "react-apollo";
import PropTypes from "prop-types";
import initApolloClient from "./apollo-client";

import persistToken from "./persist-token";

export default App =>
  class extends React.Component {
    static displayName = "withApollo(App)";
    static propTypes = {
      apolloState: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
        .isRequired,
      apolloClient: PropTypes.func,
      token: PropTypes.string
    };
    static defaultProps = {
      apolloClient: null,
      token: null
    };
    static async getInitialProps(props) {
      const { Component, router } = props;
      const { ctx } = props;

      const tokenKey = persistToken.ACCESS_TOKEN_KEY;
      if (!process.browser) this.tokenValue = cookies(ctx)[tokenKey] || null;
      else this.tokenValue = localStorage[tokenKey];

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(props);
      }

      const apolloState = {};

      const apollo = initApolloClient(null, this.tokenValue);
      try {
        await getDataFromTree(
          <App
            {...appProps}
            Component={Component}
            router={router}
            apolloState={apolloState}
            apolloClient={apollo}
          />
        );
      } catch (error) {
        console.error("Error while running `getDataFromTree`", error);// eslint-disable-line
      }

      if (!process.browser) {
        Head.rewind();
      }
      apolloState.data = apollo.cache.extract();

      const token = this.tokenValue;

      return {
        ...appProps,
        apolloState,
        token
      };
    }

    constructor(props) {
      super(props);
      this.apolloClient =
        props.apolloClient ||
        initApolloClient(props.apolloState.data, props.token);
    }

    tokenValue;

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
