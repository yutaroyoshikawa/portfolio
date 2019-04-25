import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/aleart'

interface IAleart {
  isHide: boolean
}

export interface IAleartState {
  aleart: IAleart
}

const initialReduceAleartState: IAleart = {
  isHide: true,
}

export default reducerWithInitialState(initialReduceAleartState)
  .case(actions.showAleart, (state: IAleart): IAleart => ({
    ...state,
    isHide: false,
  }))
  .case(actions.hideAleart, (state: IAleart): IAleart => ({
    ...state,
    isHide: true
  }))
  .build()
