import * as Styled from '../styles/components/works'
import React from 'react'
import Link from 'next/link'

interface IProps {
  title: string
  thumb: string
}

export default (props: IProps) => {
  return (
    <Link
      as={`/works/${props.title}`}
      href={{ pathname: '/works', query: { title: props.title } }}
    >
      <Styled.Entire>
        <Styled.Thumb src={props.thumb} alt={props.title} />
      </Styled.Entire>
    </Link>
  )
}
