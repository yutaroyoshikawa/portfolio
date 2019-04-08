import { useRef, useEffect, useState } from 'react'
import * as Styled from '../src/styles/works'
import { WorksTitle } from '../src/components'

export default () => {
  const ref = useRef<HTMLMainElement>(null)

  const [isEffect, _isEffect] = useState(false)

  const judgeScroll = () => {
    if (ref.current) {
      if(ref.current.scrollTop > 50) {
        _isEffect(true)
      } else {
        _isEffect(false)
      }
    }
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('scroll', () => judgeScroll())
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', () => judgeScroll())
      }
    }
  }, [])

  return (
    <Styled.Entire ref={ref}>
      <Styled.TopSection
        itemScope={isEffect}
      >
        <Styled.WorksTitleWrapper>
          <WorksTitle
            content="Notify Birthday!"
          />
        </Styled.WorksTitleWrapper>
      </Styled.TopSection>
      <Styled.MainContentWrapper>
        <Styled.MainContent>
          <Styled.Paragraph>
            hogehogehogehogehoge
          </Styled.Paragraph>
        </Styled.MainContent>
      </Styled.MainContentWrapper>
    </Styled.Entire>
  )
}
