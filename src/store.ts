import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './sagas'

const composeEnhancers = composeWithDevTools({})
const sagaMiddleware = createSagaMiddleware({})

export const buildStore = () => {
  const store = 
    process.env.NODE_ENV === 'production' ?  
    createStore(
      reducers,
      applyMiddleware(sagaMiddleware)
    )
    :
    createStore(
      reducers,
      composeEnhancers(applyMiddleware(sagaMiddleware))
    )

    sagaMiddleware.run(rootSaga)

    return store
}
