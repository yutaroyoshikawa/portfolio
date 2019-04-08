import { SagaIterator } from 'redux-saga'
import { call, delay, fork, put, take } from 'redux-saga/effects'
import * as actions from '../actions/menu'
import Router from 'next/router'

function* transition(): SagaIterator {
  while (true){
    const data = yield take(actions.requestTransition)
    yield put(actions.setWidth('500vw'))
    yield put(actions.setOpacity('0'))
    yield delay(600)
    yield call(Router.push, data.payload)
    yield put(actions.setTranslateX('150vw'))
    yield delay(600)
    yield put(actions.hideMenu())
    yield put(actions.setInitialize())
    yield put(actions.closeMenu())
    yield put(actions.showMenu())
  }
}

export default [
  fork(transition),
]
