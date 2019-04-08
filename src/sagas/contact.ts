import { SagaIterator } from 'redux-saga'
import { fork, put, select, take } from 'redux-saga/effects'
import * as actions from '../actions/contact'
import { isEmail } from 'validator'

function* requestSubmit(): SagaIterator {
  while (true) {
    yield take(actions.requestSubmit)
    const state = yield select()
    const email = state.contact.form.email
    if (isEmail(email)) {
      yield put(actions.faildSubmit('emailが正しくありません。'))
    } else {
      yield put(actions.successSubmit())
    }
  }
}

export default [
  fork(requestSubmit),
]
