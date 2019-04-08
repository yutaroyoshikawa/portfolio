import * as Styled from '../styles/components/slideInType'

interface ISlideInType {
  content: string
  baseDelay?: number
}

export default (props: ISlideInType) => {
  const splitContent = () => (
    props.content.split('').map((chara, i) => (
      <Styled.SplitType
        itemType={
          props.baseDelay ?
            (i * 50 + props.baseDelay).toString()
            :
            (i * 50).toString()
        }
      >
        {chara}
      </Styled.SplitType>
    ))
  )

  return(
    <div>
      {splitContent()}
    </div>
  )
}
