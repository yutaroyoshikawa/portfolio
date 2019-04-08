import React, { useCallback } from 'react'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { IMenuState } from '../reducers/menu'
import * as Styled from '../styles/components/menu'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { SlideInType } from './'
import { requestTransition } from '../actions/menu'

export type IRoute = '/about' | '/' | '/contact'

export default () => {
  const dispatch = useDispatch()

  const GET_WORKS = gql`
    {
      workses {
        name
        thumb
      }
    }
  `

  const pushRoute = (e: React.MouseEvent<HTMLAnchorElement>, route: IRoute) => {
    e.preventDefault()
    dispatch(requestTransition(route))
  }

  const isOpenMapState = useCallback(
    (state: IMenuState) => state.menu.isOpen,
    []
  )

  const widthMapState = useCallback(
    (state: IMenuState) => state.menu.width,
    []
  )

  const opacityMapState = useCallback(
    (state: IMenuState) => state.menu.opacity,
    []
  )

  const translateXMapState = useCallback(
    (state: IMenuState) => state.menu.translateX,
    []
  )

  const isShowMapState = useCallback(
    (state: IMenuState) => state.menu.isShow,
    []
  )

  const isOpen = useMappedState(isOpenMapState)
  const width = useMappedState(widthMapState)
  const opacity = useMappedState(opacityMapState)
  const translateX = useMappedState(translateXMapState)
  const isShow = useMappedState(isShowMapState)

  return(
    <Query query={GET_WORKS}>
      {({loading, error, data}) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        return (
          isShow ?
          <Styled.Entire
            in={isOpen}
            timeout={600}
            itemProp={width}
            itemID={translateX}
          >
            <Styled.LinkBox
              itemProp={opacity}
            >
              <Styled.LinkWrapper>
                <Styled.LinkItem>
                  <Styled.Link
                    href="/"
                    onClick={e => pushRoute(e, '/')}
                  >
                    <SlideInType content="top" baseDelay={300} />
                    {/* {data.workses.map((works: any) => works.name)} */}
                  </Styled.Link>
                </Styled.LinkItem>
                <Styled.UnderBorder />
              </Styled.LinkWrapper>
              <Styled.LinkWrapper>
                <Styled.LinkItem
                >
                  <Styled.Link
                    href="/about"
                    onClick={e => pushRoute(e, '/about')}
                  >
                    <SlideInType content="about" baseDelay={400} />
                  </Styled.Link>
                </Styled.LinkItem>
                <Styled.UnderBorder />
              </Styled.LinkWrapper>
              <Styled.LinkWrapper>
                <Styled.LinkItem
                >
                  <Styled.Link
                    href="/contact"
                    onClick={e => pushRoute(e, '/contact')}
                  >
                    <SlideInType content="contact" baseDelay={500} />
                  </Styled.Link>
                </Styled.LinkItem>
                <Styled.UnderBorder />
              </Styled.LinkWrapper>
            </Styled.LinkBox>
          </Styled.Entire>
          :
          null
        )
      }}
    </Query>
    
  )
}
