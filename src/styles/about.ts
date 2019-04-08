import styled from 'styled-components'
import transition from 'styled-transition-group'

export const Entire = styled.div`
${{
  width: '100vw',
  height: '100vh',
  overflowY: 'scroll',
  overflowX: 'hidden',
  webkitOverflowScrolling: 'touch',
  background: 'rgba(253, 172, 167, 1)',
}}
@media screen and (min-width: 1024px){
${{
  alignItems: 'center',
}}
}
@media screen and (max-width: 480px){
${{
  alignItems: 'flex-start',
  // flexDirection: 'column',
  // flexWrap: 'wrap',
}}
}
`

export const TopWrapper = styled.h1`
${{
  width: '100vw',
  height: 'calc(100vh + 1px)',
  display: 'flex',
  justifyContent: 'center',
  background: 'rgba(253, 172, 167, 1)',
  transition: 'all 400ms linear',
}}
  filter: ${props => props.itemScope ? 'blur(10px)' : 'blur(0px)'};
@media screen and (min-width: 1024px){
${{
  alignItems: 'center',
}}
}
@media screen and (max-width: 480px){
${{
  alignItems: 'flex-start',
  flexDirection: 'column',
  flexWrap: 'wrap',
  marginLeft: '20px'
}}
}
`

export const Name = styled.span`
${{
  overflowY: 'hidden',
  display: 'inline-block',
  color: '#FFF',
  fontFamily: 'Raleway, sans-serif',
  letterSpacing: '5px',
}}
@media screen and (min-width: 1024px){
${{
  fontSize: '5vw',
}}
}
@media screen and (max-width: 480px){
${{
  fontSize: '15vw',
  padding: '10px 0',
}}
}
`

export const MyInfoWrapper = transition.div.attrs({
  unmountOnExit: true,
  timeout: 400
})`
&:enter {
  opacity: 0.1;
  transform: translateY(100px) scale(0.98);
}
&:enter-active {
  opacity: 1.0;
  transform: translateY(0px) scale(1.0);
  transition: all 400ms ease-out;
}
&:exit {
  opacity: 1.0;
  transform: translateY(0px) scale(1.0);
}
&:exit-active {
  opacity: 0.1;
  transform: translateY(100px) scale(0.98);
  transition: all 400ms ease-out;
}
${{
  width: '100vw',
  height: '100vh',
  paddingTop: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(255, 255, 255, 0.1)',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 10,
  overflowY: 'auto',
}}
`

export const Closer = styled.div`
${{
  width: '100vw',
  height: '100px',
  position: 'fixed',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 10,
}}
@media screen and (min-width: 1024px){
${{
  top: '100px',
}}
}
@media screen and (max-width: 480px){
${{
  top: '30px',
}}
}
`

export const SelfIntroWrapper = transition.section.attrs({
  unmountOnExit: true,
  timeout: 400
})`
&:enter {
  opacity: 0.1;
  transform: translateY(100px) skewX(-10deg);
}
&:enter-active {
  opacity: 1.0;
  transform: translateY(0px);
  transition: all 400ms ease-out;
}
&:exit {
  opacity: 1.0;
  transform: translateY(0px);
}
&:exit-active {
  opacity: 0.1;
  transform: translateY(-100px) skewX(10deg);
  transition: all 400ms ease-out;
}
${{
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
}}
@media screen and (min-width: 1024px){
${{
  width: '100vw',
}}
}
@media screen and (max-width: 480px){
${{
  width: '90vw',
}}
}
`

export const SelfIntro = styled.p`
${{
  color: '#555',
  letterSpacing: '3px',
  textIndent: 'calc(1em + 3px)',
}}
font-family: 'Noto Serif TC', serif;
@media screen and (min-width: 1024px){
${{
  fontSize: '20px',
  lineHeight: '40px',
}}
}
@media screen and (max-width: 480px){
${{
  fontSize: '16px',
  lineHeight: '32px',
}}
}
`

export const MySkillsWrapper = transition.section.attrs({
  unmountOnExit: true,
  timeout: 400,
})`
&:enter {
  opacity: 0.1;
  transform: translateY(-100px) skewX(10deg);
}
&:enter-active {
  opacity: 1.0;
  transform: translateY(0px);
  transition: all 400ms ease-out;
}
&:exit {
  opacity: 1.0;
  transform: translateY(0px);
}
&:exit-active {
  opacity: 0.1;
  transform: translateY(100px) skewX(-10deg);
  transition: all 400ms ease-out;
}
${{
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
}}
`

export const MySkills = styled.div`

`

export const AboutMenuWrapper = styled.div`
${{
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
}}
@media screen and (min-width: 1024px){
${{
  bottom: '100px',
}}
}
@media screen and (max-width: 480px){
${{
  bottom: '30px',
}}
}
`
