import styled, { keyframes } from 'styled-components'
import transition from 'styled-transition-group'

export const Entire = styled.div`
${{
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgb(138, 164, 205)',
}}
`

export const MainContent = styled.section`
${{
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}}
`

export const WorksSection = styled.section`
${{
  width: '100vw',
  height: '100vh',
  overflowY: 'scroll',
}}
`

export const WorksWrapper = styled.div`
${{
  margin: '100px auto 0 auto',
}}
@media screen and (min-width: 1024px){
${{
  width: '1020px',
}}
}
@media screen and (max-width: 480px){
${{
  width: '95vw',
}}
}
`

export const Works = styled.div`
@media screen and (min-width: 1024px){
${{
  margin: '50px auto'
}}
}
@media screen and (max-width: 480px){
${{
  margin: '5vw auto'
}}
}
`

export const Loading = transition.section.attrs({
  unmountOnExit: true,
  timeout: 300
})`
&:enter {
  opacity: 0.1;
}
&:enter-active {
  opacity: 1.0;
  transition: opacity 300ms ease-out;
}
&:exit {
  opacity: 1.0;
}
&:exit-active {
  opacity: 0.1;
  transition: opacity 300ms ease-out;
}
${{
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(255, 255, 255, 0.2)',
  opacity: 0,
}}
`

const bounceBar = keyframes`
 0% {
  height: 10px;
 }
 100% {
  height: 50px;
 }
`

export const LoadingBar = styled.div`
${{
  width: '50px',
  height: '50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
}}
`

export const LoadingFirstBar = styled.div`
${{
  width: '10px',
  height: '7px',
  background: '#FFF',
  borderRadius: '5px',
}}
animation: ${bounceBar} 500ms ease 0ms infinite alternate;
`

export const LoadingSecondBar = styled.div`
${{
  width: '10px',
  height: '7px',
  background: '#FFF',
  borderRadius: '5px',
}}
animation: ${bounceBar} 500ms ease 100ms infinite alternate;
`

export const LoadingThirdBar = styled.div`
${{
  width: '10px',
  height: '7px',
  background: '#FFF',
  borderRadius: '5px',
}}
animation: ${bounceBar} 500ms ease 200ms infinite alternate;
`

export const Error = styled.section`
${{
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}}
`
