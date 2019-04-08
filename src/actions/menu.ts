import actionCreatorFactory from 'typescript-fsa'
import { IRoute } from '../components/menu'

const actionCreator             = actionCreatorFactory()

export const openMenu           = actionCreator('OPEN_MENU')
export const closeMenu          = actionCreator('CLOSE_MENU')

export const requestTransition  = actionCreator<IRoute>('REQUEST_TRANSITION')

export const setWidth           = actionCreator<string>('SET_WIDTH')
export const setOpacity         = actionCreator<string>('SET_OPACITY')
export const setTranslateX      = actionCreator<string>('SET_TRANSLATE_X')

export const hideMenu           = actionCreator('HIDE_MENU')
export const showMenu           = actionCreator('SHOW_MENU')

export const setInitialize      = actionCreator('SET_INITIALIZE')
