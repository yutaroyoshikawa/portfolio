import { useCallback } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { IAboutMenuState } from '../reducers/aboutMenu'
import * as actions from '../actions/aboutMenu'
import * as Styled from '../styles/components/aboutMenu'

export default () => {
  const mapState = useCallback(
    (state: IAboutMenuState) => state.aboutMenu.selected,
    []
  )

  const selected = useMappedState(mapState)
  const dispatch = useDispatch()
  const setIntro = () => dispatch(actions.changeIntro())
  const setSkills = () => dispatch(actions.changeSkills())

  return (
    <Styled.Entire>
      <Styled.Intro
        onClick={setIntro}
        itemProp={selected}
      >
        Intro
      </Styled.Intro>
      <Styled.Slills
        onClick={setSkills}
        itemProp={selected}
      >
        Skills
      </Styled.Slills>
    </Styled.Entire>
  )
}
