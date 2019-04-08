import { SlideInType } from './'
import * as Styled from '../styles/components/worksTitle'

interface IProps {
  content: string
}

export default (props: IProps) => {
  const renderTitle = (content: string) => {
    const length = content.length
    if (length <= 10) {
      return (
        <Styled.TitleWrapper>
          <SlideInType content={content} baseDelay={400} />
        </Styled.TitleWrapper>
      )
    } else {
      const loop = length / 10
      const data: string[] = new Array()
      let min = 0
      if (length % 10 === 0) {
        for(let i = 0; loop > i; i++) {
          data.push(
            content.slice(min, 10 * i)
          )
          min = 10 * i
        }
      } else {
        for(let i = 1; loop > i; i++) {
          data.push(
            content.slice(min, 10 * i)
          )
          min = 10 * i
        }
        data.push(
          content.slice(min)
        )
      }
      return (
        data.map(data => (
          <Styled.TitleWrapper>
            <SlideInType content={data} baseDelay={400} />
          </Styled.TitleWrapper>
        ))
      )
    }
  }

  return (
    <Styled.Title>
      {renderTitle(props.content)}
    </Styled.Title>
  )
}
