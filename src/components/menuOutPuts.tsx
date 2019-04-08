import { useCallback } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import * as Styled from '../styles/components/menuOutPuts'
import { Menu, MenuButton } from '../components'
import { IMenuState } from '../reducers/menu'
import { closeMenu } from '../actions/menu'

export default () => {
  const dispatch = useDispatch()

  const mapState = useCallback(
    (state: IMenuState) => state.menu.isOpen,
    []
  )

  const isOpen = useMappedState(mapState)

  const click = () => dispatch(closeMenu())

  return (
    <div>
      <Styled.MenuButtonWrapper>
        <MenuButton />
      </Styled.MenuButtonWrapper>
      <Styled.MenuWrapper>
        <Menu />
      </Styled.MenuWrapper>
      <Styled.Background
        in={isOpen}
        timeout={600}
        onClick={click}
      />
    </div>
  )
}