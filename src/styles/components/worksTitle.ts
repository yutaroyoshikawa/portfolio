import styled from 'styled-components'

export const TitleWrapper = styled.div`
${{
  overflowY: 'hidden'
}}
`

export const Title = styled.h1`
${{
  color: '#FFF',
  fontFamily: 'Cantata One, Noto Serif TC, serif',
}}
@media screen and (min-width: 1024px){
${{
  fontSize: '5vw',
}}
}
@media screen and (max-width: 480px){
${{
  fontSize: '30px',
}}
}
`
