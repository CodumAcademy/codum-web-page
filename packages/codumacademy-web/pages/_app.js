import React from "react";
import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import config from "react-reveal/globals";
import { compose } from "recompose";
import { Provider } from "react-redux";
import withApollo from "../utils/apollo/with-apollo";
import withRedux from "../utils/redux/with-redux";

import AppWrapper from "../components/AppWrapper";

import registerServiceWorker from "../utils/registerServiceWorker";

config({ ssrFadeout: true });

class Codum extends App {
  componentDidMount() {
    if (process.env.NODE_ENV === "production") registerServiceWorker();
  }
  render() {
    const { Component, pageProps, apolloClient, store } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            <AppWrapper
              {...pageProps}
              apolloClient={apolloClient}
              store={store}
            >
              <Component {...pageProps} />
            </AppWrapper>
          </Provider>
        </ApolloProvider>
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async />
      </Container>
    );
  }
}

const enhance = compose(withApollo, withRedux);
export default enhance(Codum);
