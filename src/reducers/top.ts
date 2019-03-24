import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/top'

interface ITop {
  count: number
}

export interface ITopState {
  top: ITop
}

const initialReduceTopState: ITop = {
  count: 0,
}

export default reducerWithInitialState(initialReduceTopState)
  .case(actions.increment, (state: ITop): ITop => ({
    ...state,
    count: state.count++,
  }))
  .build()
