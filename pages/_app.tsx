import React from 'react'
import App, { AppComponentProps, Container } from 'next/app'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { Global } from '../src/styles/App'
import { buildStore } from '../src/store'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

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
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(buildStore)(withReduxSaga(MyApp))