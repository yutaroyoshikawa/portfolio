import * as Styled from '../styles/components/tag'

interface IProps {
  content: string
}

export default (props: IProps) => {
  return (
    <Styled.Entire>
      {props.content}
    </Styled.Entire>
  )
}
