import React from 'react'
import App, { AppComponentProps, Container } from 'next/app'
import { StoreContext } from 'redux-react-hook'
import { Store } from 'redux'
import { Global } from '../src/styles/App'
import { buildStore } from '../src/store'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { MenuOutPuts } from '../src/components'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const isBrowser = typeof window !== 'undefined'

if(!isBrowser) {
  require('isomorphic-fetch')
}

const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({uri: 'https://us-central1-portforlio-a9f8c.cloudfunctions.net/apollo'}),
  cache: new InMemoryCache(),
})

const configureStore = buildStore()

type AllState = ReturnType<typeof configureStore.getState>

interface IProps extends AppComponentProps {
  store: Store<AllState>;
  pageProps: { title: string };
}

interface IInitialProps {
  Component: any
  ctx: any
}

class MyApp extends App<IProps> {
  static async getInitialProps(props: IInitialProps) {
    return {
      pageProps: props.Component.getInitialProps
        ? await props.Component.getInitialProps(props.ctx)
        : {}
    };
  }

  public render() {
    const { Component, pageProps, store } = this.props
    return(
      <Container>
        <Global />
        <ApolloProvider client={client}>
          <StoreContext.Provider value={store}>
            <MenuOutPuts />
            <Component {...pageProps} />
          </StoreContext.Provider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withRedux(buildStore)(withReduxSaga(MyApp))
