import { SagaIterator } from 'redux-saga'
import { all } from 'redux-saga/effects';
import menu from './menu'
import contact from './contact'

export default function* (): SagaIterator{
  yield all([
    ...menu,
    ...contact,
  ])
}