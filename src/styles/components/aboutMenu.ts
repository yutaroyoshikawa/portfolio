import styled, { css } from 'styled-components'

export const Entire = styled.div`
${{
  border: 'solid 1px #555',
  borderRadius: '25px',
  padding: '5px',
}}
`

const button = css`
${{
  padding: '5px 30px',
  fontSize: '20px',
  transition: 'all 200ms ease-out',
  fontFamily: 'Raleway, sans-serif',
  letterSpacing: '3px',
}}
&:hover {
${{
  background: '#000',
  color: '#FFF',
}}
}
`

export const Intro = styled.button`
${button}
${{
  borderRadius: '20px 0px 0px 20px',
}}
${props => props.itemProp === 'intro' ? 'background: #000' : null}
${props => props.itemProp === 'intro' ? 'color: #FFF' : null}
`

export const Slills = styled.button`
${button}
${{
  borderRadius: '0px 20px 20px 0px'
}}
${props => props.itemProp === 'skills' ? 'background: #000' : null}
${props => props.itemProp === 'skills' ? 'color: #FFF' : null}
`
