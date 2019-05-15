import React, { useCallback, useEffect, useRef, useState } from 'react'
import * as Styled from '../src/styles/about'
import { SlideInType, AboutMenu, Skill } from '../src/components'
import { IAboutMenuState } from '../src/reducers/aboutMenu'
import { useDispatch, useMappedState } from 'redux-react-hook'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { setSkills } from '../src/actions/about'
import * as Loading from '../src/styles/index'

export default () => {
  const dispatch = useDispatch()
  let startPos = 0

  const GET_SKILLS = gql`
  {
    getSkills {
      name
      val
    }
  }
  `

  const wrappRef = useRef<HTMLDivElement>(null)

  const [isOpenInfo, _isOpenInfo] = useState(false)

  const closeInfo = () => {
    _isOpenInfo(false)
    if (wrappRef && wrappRef.current) {
      wrappRef.current.scrollTo({ top: 0 })
    }
  }

  const judgeScroll = () => {
    if (wrappRef && wrappRef.current) {
      const currentPos = wrappRef.current.scrollTop
      currentPos > startPos ?
        _isOpenInfo(true)
        :
        _isOpenInfo(false)
      startPos = currentPos
    }
  }

  const selectedMenuMapState = useCallback(
    (state: IAboutMenuState) => state.aboutMenu.selected,
    [],
  )

  const selectedMenu = useMappedState(selectedMenuMapState)

  useEffect(() => {
    if (wrappRef && wrappRef.current) {
      wrappRef.current.addEventListener('scroll', () => {
        judgeScroll()
      })
    }

    return () => {
      if (wrappRef && wrappRef.current) {
        wrappRef.current.removeEventListener('scroll', () => {
          judgeScroll()
        })
      }
    }
  }, [])

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

  const renderMain = (data: any) => {
    dispatch(setSkills(data))
    return (
      <Skill />
    )
  }

  return (
    <main>
      <Styled.Entire ref={wrappRef}>
        <Styled.TopWrapper
          itemScope={isOpenInfo}
        >
          <Styled.Name>
            <SlideInType content="Yutaro" baseDelay={300} />
          </Styled.Name>
          <Styled.Name>
            <SlideInType content="Yoshikawa" baseDelay={300} />
          </Styled.Name>
        </Styled.TopWrapper>
        <Styled.MyInfoWrapper
          in={isOpenInfo}
          timeout={400}
        >
          <Styled.Closer
            onClick={closeInfo}
          >
            閉じる
          </Styled.Closer>
          <Styled.SelfIntroWrapper
            in={selectedMenu === 'intro' ? true : false}
            timeout={400}
          >
            <Styled.SelfIntro>
              私は「ワクワクは原動力だ」というテーマのもと日々ITを勉強しています。<br />
              誰かが何か行動を起こすとき、それにはそこにワクワクするものドキドキするものがあるからではないでしょうか。<br />
              私は、人にそう感じてもらえるものを生み出したいと考えています。
            </Styled.SelfIntro>
            </Styled.SelfIntroWrapper>
            <Styled.MySkillsWrapper
              in={selectedMenu === 'skills' ? true : false}
              timeout={400}
            >
              <Styled.MySkills>
                <Query query={GET_SKILLS}>
                  {({loading, error, data}) => {
                    if (loading) return renderLoading()
                    if (error) return renderError()
                    return renderMain(data.getSkills)
                  }}
                </Query>
              </Styled.MySkills>
            </Styled.MySkillsWrapper>
          <Styled.AboutMenuWrapper>
            <AboutMenu />
          </Styled.AboutMenuWrapper>
        </Styled.MyInfoWrapper>
      </Styled.Entire>
    </main>
  );
}
