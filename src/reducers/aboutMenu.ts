import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/aboutMenu'

export type ISelected = 'intro' | 'skills'

interface IAboutMenu {
  selected: ISelected
}

export interface IAboutMenuState {
  aboutMenu: IAboutMenu
}

const initialReduceMenuState: IAboutMenu = {
  selected: 'intro',
}

export default reducerWithInitialState(initialReduceMenuState)
  .case(actions.changeIntro, (state: IAboutMenu): IAboutMenu => ({
    ...state,
    selected: 'intro',
  }))
  .case(actions.changeSkills, (state: IAboutMenu): IAboutMenu => ({
    ...state,
    selected: 'skills',
  }))
  .build()
