import styled from 'styled-components'

export const Entire = styled.article`
${{
  transition: 'all 500ms ease',
  position: 'relative',
  zIndex: 50,
  cursor: 'pointer',
  margin: '0 auto'
}}
  border-radius: 30px;
  &:hover {
    box-shadow: 0 0 40px 1px rgba(0,0,0,0.4);
  }
@media screen and (min-width: 1024px){
${{
  width: '1020px',
  height: '200px'
}}
}
@media screen and (max-width: 480px){
${{
  width: '90vw',
  height: '130px'
}}
}
`

export const Thumb = styled.img`
${{
  objectFit: 'cover',
  position: 'relative',
  zIndex: 50,
  width: '100%',
  borderRadius: '30px',
}}
@media screen and (min-width: 1024px){
${{
  height: '200px'
}}
}
@media screen and (max-width: 480px){
${{
  height: '130px'
}}
}
`
