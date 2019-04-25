import { useRef, useEffect, useState } from 'react'
import * as Styled from '../src/styles/works'
import * as Loading from '../src/styles/index'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { WorksTitle, Tag } from '../src/components'

interface IQuery {
  title: string
}

interface IProps {
  query: IQuery
}

interface IData {
  title: string
  text: string
  thumb: string
}

const Works = (props: IQuery) => {
  const ref = useRef<HTMLMainElement>(null)

  const GET_WORKS = gql`
    {
      getWork(title: "${props.title}") {
        title
        text
        thumb
        tags
      }
    }
  `

  const [isEffect, _isEffect] = useState<boolean>(false)
  const [backGround, _backGround] = useState<string>('')

  const renderMain = (data: IData) => {
    _backGround(data.thumb)
    return (
      <div>
        <Styled.TopSection
          itemScope={isEffect}
        >
          <div>
            <Styled.TagWrap>
              {data.tags.map(data => <Styled.Tag><Tag content={data} /></Styled.Tag>)}
            </Styled.TagWrap>
            <Styled.WorksTitleWrapper>
              <WorksTitle
                content={data.title}
              />
            </Styled.WorksTitleWrapper>
          </div>
        </Styled.TopSection>
        <Styled.MainContentWrapper>
          <Styled.MainContent>
            <Styled.Paragraph>
              {data.text}
            </Styled.Paragraph>
          </Styled.MainContent>
        </Styled.MainContentWrapper>
      </div>
    )
  }

  const judgeScroll = () => {
    if (ref.current) {
      if(ref.current.scrollTop > 50) {
        _isEffect(true)
      } else {
        _isEffect(false)
      }
    }
  }

  const renderLoading = () => (
    <Loading.MainContent>
      <Loading.LoadingBar>
        <Loading.LoadingFirstBar />
        <Loading.LoadingSecondBar />
        <Loading.LoadingThirdBar />
      </Loading.LoadingBar>
    </Loading.MainContent>
  )

  const renderError = () => (
    <div>Error</div>
  )

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
    <div>
      {
        backGround ?
          <Styled.BackGround itemProp={backGround} itemScope={isEffect} />
          :
          null
      }
      <Styled.Entire ref={ref}>
        <Query query={GET_WORKS}>
          {({loading, error, data}) => {
            if (loading) return renderLoading()
            if (error) return renderError()
            return renderMain(data.getWork)
          }}
        </Query>
      </Styled.Entire>
    </div>
  )
}

Works.getInitialProps = async (data: IProps) => {
  return data.query
}

export default Works