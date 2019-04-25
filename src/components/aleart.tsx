import { useCallback } from 'react'
import * as Styled from '../styles/components/aleart'
import { useMappedState } from 'redux-react-hook'
import { IAleartState } from '../reducers/aleart'

export default () => {
  const mapState = useCallback(
    (state: IAleartState) => state.aleart.isHide,
    []
  )

  const isHide = useMappedState(mapState)

  return (
    <Styled.Entire in={!isHide} timeout={600}>
      <Styled.Aleart>登録が完了しました。</Styled.Aleart>
    </Styled.Entire>
  );
}
