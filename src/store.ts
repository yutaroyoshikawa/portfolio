import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const buildStore = () => {
  const store: any =
    process.env.NODE_ENV === 'production' ?
      createStore(
        reducers,
        applyMiddleware(sagaMiddleware)
      )
      :
      createStore(
        reducers,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
      )

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  };
  store.runSagaTask()

  return store
}
