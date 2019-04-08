import { SagaIterator } from 'redux-saga'
import { all } from 'redux-saga/effects';
import menu from './menu'

export default function* (): SagaIterator{
  yield all([
    ...menu,
  ])
}