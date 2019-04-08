import styled, { css } from 'styled-components'

const line = css`
${{
  width: '100%',
  height: '3px',
}}
`

export const FirstLine = styled.div`
  ${line}
  background: ${props => props.itemScope ? '#FFF' : '#555'};
  transition: transform 1500ms cubic-bezier(0.680, -0.550, 0.265, 1.550), background 400ms ease;
  @media screen and (min-width: 1024px){
    transform: ${props => props.itemScope ? 'rotate(0deg)' : 'rotate(405deg) translate(13px, 15px)'};
  }
  @media screen and (max-width: 480px){
    transform: ${props => props.itemScope ? 'rotate(0deg)' : 'rotate(405deg) translate(11px, 14px)'};
  }
`

export const SecondLine = styled.div`
  ${line}
  background: #FFF;
  opacity: ${props => props.itemScope ? 1 : 0};
  transition: opacity 1500ms cubic-bezier(0.680, -0.550, 0.265, 1.550), background 400ms ease;
`

export const ThirdLine = styled.div`
  ${line}
  background: ${props => props.itemScope ? '#FFF' : '#555'};
  transition: transform 1500ms cubic-bezier(0.680, -0.550, 0.265, 1.550), background 400ms ease;
  @media screen and (min-width: 1024px){
    transform: ${props => props.itemScope ? 'rotate(0deg)' : 'rotate(-405deg) translate(18px, -22px)'};
  }
  @media screen and (max-width: 480px){
    transform: ${props => props.itemScope ? 'rotate(0deg)' : 'rotate(-405deg) translate(5px, -8px)'};
  }
`

export const Entire = styled.div`
${{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  flexWrap: 'wrap',
  position: 'fixed',
  cursor: 'pointer',
  zIndex: 10,
}}

@media screen and (min-width: 1024px){
${{
  width: '80px',
  height: '50px',
  left: '50px',
  top: '50px',
}}
}
@media screen and (max-width: 480px){
${{
  width: '40px',
  height: '30px',
  left: '20px',
  top: '20px',
}}
}

&:hover ${FirstLine} {
${{
  background: '#AAA',
}}
}
&:hover ${SecondLine} {
${{
  background: '#AAA',
}}
}
&:hover ${ThirdLine} {
${{
  background: '#AAA',
}}
}

`
