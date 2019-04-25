import styled from 'styled-components'
import transition from 'styled-transition-group'

export const Entire = transition.div.attrs({
  unmountOnExit: true,
  timeout: 600
})`
&:enter {
  transform: translateX(-10%);
  opacity: 0;
}
&:enter-active {
  transform: translateX(0%);
  opacity: 1;
  transition: all 600ms ease;
}
&:exit {
  transform: translateX(0%);
  opacity: 1;
}
&:exit-active {
  opacity: 0;
  transform: translateX(-10%);
  transition: all 600ms ease;
}
${{
  width: '250px',
  height: '70px',
  background: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  right: '50px',
  top: '50px'
}}
`

export const Aleart = styled.p`
${{
  color: '#555'
}}
`
