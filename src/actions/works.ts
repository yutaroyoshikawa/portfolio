import actionCreatorFactory from 'typescript-fsa'
import { IWorks } from '../reducers/top'

const actionCreator = actionCreatorFactory()

export const requestGetWorks  = actionCreator('REQUEST_GET_WORKS')
export const successGetWorks  = actionCreator<IWorks[]>('SUCCESS_GET_WORKS')
export const faildGetWorks    = actionCreator<any>('FAILD_GET_WORKS')
