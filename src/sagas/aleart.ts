import { SagaIterator } from 'redux-saga'
import { call, delay, fork, put, take } from 'redux-saga/effects'
import * as actions from '../actions/aleart'

function* aleart(): SagaIterator {
  while (true){
    yield take(actions.showAleart)
    yield delay(1500)
    yield put(actions.hideAleart())
  }
}

export default [
  fork(aleart),
]
