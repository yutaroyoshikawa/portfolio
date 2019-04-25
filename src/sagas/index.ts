import { SagaIterator } from 'redux-saga'
import { all } from 'redux-saga/effects';
import menu from './menu'
import aleart from './aleart'

export default function* (): SagaIterator{
  yield all([
    ...menu,
    ...aleart,
  ])
}