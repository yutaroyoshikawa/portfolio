import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/menu'

interface IMenu {
  isOpen: boolean
  width: string
  opacity: string
  translateX: string
  isShow: boolean
}

export interface IMenuState {
  menu: IMenu
}

const initialReduceMenuState: IMenu = {
  isOpen: false,
  isShow: true,
  width: '700px',
  opacity: '1.0',
  translateX: '-50%',
}

export default reducerWithInitialState(initialReduceMenuState)
  .case(actions.openMenu, (state: IMenu): IMenu => ({
    ...state,
    isOpen: true,
  }))
  .case(actions.closeMenu, (state: IMenu): IMenu => ({
    ...state,
    isOpen: false,
  }))
  .case(actions.setWidth, (state: IMenu, payload): IMenu => ({
    ...state,
    width: payload,
  }))
  .case(actions.setTranslateX, (state: IMenu, payload): IMenu => ({
    ...state,
    translateX: payload,
  }))
  .case(actions.setOpacity, (state: IMenu, payload): IMenu => ({
    ...state,
    opacity: payload,
  }))
  .case(actions.setInitialize, (state: IMenu): IMenu => ({
    ...state,
    width: '700px',
    opacity: '1.0',
    translateX: '-50%',
  }))
  .case(actions.hideMenu, (state: IMenu): IMenu => ({
    ...state,
    isShow: false,
  }))
  .case(actions.showMenu, (state: IMenu): IMenu => ({
    ...state,
    isShow: true,
  }))
  .build()
