import styled from 'styled-components'
import transition from 'styled-transition-group'

export const MenuButtonWrapper = styled.button`
${{
  position: 'fixed',
  zIndex: 100,
}}
`

export const MenuWrapper = styled.div`
&:enter {
  transform: skewX(0deg) translateX(-130%);
}
&:enter-active {
  transform: skewX(-20deg) translateX(-50%);
  transition: transform 400ms ease-out;
}
&:exit {
  transform: skewX(-20deg) translateX(-50%);
}
&:exit-active {
  transform: skewX(0deg) translateX(-130%);
  transition: transform 400ms ease-out;
}
${{
  position: 'fixed',
  zIndex: 99,
}}
`

export const Background = transition.div.attrs({
  unmountOnExit: true,
  timeout: 600
})`
&:enter {
  opacity: 0.01;
}
&:enter-active {
  opacity: 1;
  transition: opacity 600ms ease-out;
}
&:exit {
  opacity: 1;
}
&:exit-active {
  opacity: 0.01;
  transition: opacity 400ms ease-out;
}
${{
  width: '100vw',
  height: '100vh',
  filter: 'blur(20px)',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 98,
  background: 'rgba(255, 255, 255, 0.4)',
  poinerEvents: 'none',
}}
`
