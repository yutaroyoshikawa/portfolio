import React, { useCallback, useEffect, useRef, useState } from 'react'
import * as Styled from '../src/styles/about'
import { SlideInType, AboutMenu } from '../src/components'
import { IAboutMenuState } from '../src/reducers/aboutMenu'
import { useMappedState } from 'redux-react-hook'

export default () => {
  let startPos = 0

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
              私が作る作品は、人にそう感じてもらえるものを生み出したいと考えています。
            </Styled.SelfIntro>
            </Styled.SelfIntroWrapper>
            <Styled.MySkillsWrapper
              in={selectedMenu === 'skills' ? true : false}
              timeout={400}
            >
              <Styled.MySkills>
                hoge
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
