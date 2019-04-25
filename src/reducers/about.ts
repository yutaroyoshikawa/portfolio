import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/about'

export interface ISkills {
  name: string
  val: number
}

interface IAbout {
  skills: ISkills[]
}

export interface IAboutState {
  about: IAbout
}

const initialReduceMenuState: IAbout = {
  skills: new Array()
}

export default reducerWithInitialState(initialReduceMenuState)
  .case(actions.setSkills, (state: IAbout, payload): IAbout => ({
    ...state,
    skills: payload,
  }))
  .build()
