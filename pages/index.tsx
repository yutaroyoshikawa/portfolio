import * as Styled from '../src/styles/index'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Works } from '../src/components'
import Head from 'next/head'

export default () => {
  const GET_WORKS = gql`
    {
      workses {
        title
        thumb
      }
    }
  `

  interface IWorks {
    title: string
    thumb: string
  }

  interface IQuery {
    workses: IWorks[]
  }

  const renderLoading = () => (
    <Styled.MainContent>
      <Styled.LoadingBar>
        <Styled.LoadingFirstBar />
        <Styled.LoadingSecondBar />
        <Styled.LoadingThirdBar />
      </Styled.LoadingBar>
    </Styled.MainContent>
  )

  const renderError = () => (
    <Styled.Error>
      <p>Error</p>
    </Styled.Error>
  )

  const renderMain = (data: IQuery, isLoading: boolean) => (
    <div>
    <Styled.Loading
      in={isLoading}
      timeout={300}
    >
      <Styled.LoadingBar>
        <Styled.LoadingFirstBar />
        <Styled.LoadingSecondBar />
        <Styled.LoadingThirdBar />
      </Styled.LoadingBar>
    </Styled.Loading>
    {
      !isLoading ?
        <Styled.MainContent>
          <Styled.WorksSection>
            <Styled.WorksWrapper>
            {
              data.workses.map(data => (
                <Styled.Works>
                  <Works title={data.title} thumb={data.thumb} />
                </Styled.Works>
              ))
            }
            </Styled.WorksWrapper>
          </Styled.WorksSection>
        </Styled.MainContent>
        :
        null
    }
    </div>
  )

  return (
    <Styled.Entire>
      <Head>
        <title>吉川勇太郎のポートフォリオ</title>
      </Head>
      <Query query={GET_WORKS}>
        {({loading, error, data}) => {
          if (loading) return renderLoading()
          if (error) return renderError()
          return renderMain(data, loading)
        }}
      </Query>
    </Styled.Entire>
  )
}
