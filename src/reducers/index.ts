import { combineReducers } from 'redux'
import top from './top'
import menu from './menu'
import aboutMenu from './aboutMenu'
import contact from './contact'
import about from './about'

export default combineReducers(
  {
    top,
    menu,
    aboutMenu,
    contact,
    about,
  }
)
