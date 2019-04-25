import React, { useCallback } from 'react'
import {  useDispatch, useMappedState } from 'redux-react-hook'
import { openMenu, closeMenu } from '../actions/menu'
import { IMenuState } from '../reducers/menu'
import * as Styled from '../styles/components/menuButton'

export default () => {
  const mapState = useCallback(
    (state: IMenuState) => state.menu.isOpen,
    []
  )

  const isOpen = useMappedState(mapState)

  const dispatch = useDispatch()
  const hundleClick = () => dispatch(isOpen ? closeMenu() : openMenu())

  return (
    <Styled.Entire onClick={hundleClick}>
      <Styled.FirstLine itemScope={!isOpen} />
      <Styled.SecondLine itemScope={!isOpen} />
      <Styled.ThirdLine itemScope={!isOpen} />
    </Styled.Entire>
  )
}