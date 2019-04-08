import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/works'

export interface IWorks {
  name: string
  thumb: string
}

export type ILoad = 'success' | 'error' | 'none'

interface ITop {
  isLoading: boolean
  isSuccessLoad: ILoad
  works: IWorks[]
}

export interface ITopState {
  top: ITop
}

const initialReduceTopState: ITop = {
  isLoading: false,
  isSuccessLoad: 'none',
  works: new Array(),
}

export default reducerWithInitialState(initialReduceTopState)
  .case(actions.requestGetWorks, (state: ITop): ITop => ({
    ...state,
    isLoading: true,
  }))
  .case(actions.successGetWorks, (state: ITop, payload): ITop => ({
    ...state,
    isLoading: false,
    isSuccessLoad: 'success',
    works: payload,
  }))
  .case(actions.faildGetWorks, (state: ITop): ITop => ({
    ...state,
    isLoading: false,
    isSuccessLoad: 'error',
  }))
  .build()
