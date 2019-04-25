import styled, { css, keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Entire = styled.main`
${{
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgb(138, 164, 205)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}}
`

const scaleIn = keyframes`
0% {
${{
  transform: 'scale(0.1)',
}}
}
100% {
${{
  transform: 'scale(1.0)',
}}
}
`

const fadeIn = keyframes`
0% {
${{
  opacity: 0,
}}
}
100% {
${{
  opacity: 1,
}}
}
`

export const FormWrapper = styled.section`
${{
  border: 'solid 2px #FFF',
  transform: 'scale(0.1)',
}}
animation: ${scaleIn} 700ms cubic-bezier(1,0,.35,1.2) 300ms 1 forwards;
@media screen and (min-width: 1024px){
${{
  width: '500px',
  height: '500px',
  borderRadius: '60px',
  padding: '20px',
  transform: 'translate(-30px, -30px)',
}}
}
@media screen and (max-width: 480px){
${{
  width: '280px',
  height: '280px',
  borderRadius: '38px',
  padding: '20px',
  transform: 'translate(-30px, -10px)',
}}
}
`

export const FormTitle = styled.h1`
${{
  color: '#FFF',
  display: 'inline-block',
  padding: '10px',
  overflowY: 'hidden',
  background: 'rgb(138, 164, 205)',
  fontFamily: 'Raleway, sans-serif',
}}
@media screen and (min-width: 1024px){
${{
  fontSize: '90px',
  transform: 'translate(-65px, -70px)',
  letterSpacing: '10px',
}}
}
@media screen and (max-width: 480px){
${{
  fontSize: '40px',
  transform: 'translate(-35px, -50px)',
  letterSpacing: '5px',
}}
}
`

export const Form = styled.form`
${{
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexDirection: 'column',
  flexWrap: 'wrap',
  opacity: 0,
}}
animation: ${fadeIn} 800ms ease 1200ms 1 forwards;
@media screen and (min-width: 1024px){
${{
  height: '420px',
  transform: 'translate(60px, 0px)',
}}
}
@media screen and (max-width: 480px){
${{
  height: '270px',
  transform: 'translate(30px, -30px)',
}}
}
`

export const InputWrapper = styled.div`
${{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  flexWrap: 'wrap',
  width: '100%',
}}
@media screen and (min-width: 1024px){
${{
  height: '280px',
}}
}
@media screen and (max-width: 480px){
${{
  height: '190px',
}}
}
`

const input = css`
${{
  width: '100%',
  color: '#555',
  borderRadius: '20px',
  border: 'solid 2px rgba(255, 255, 255, 0)',
  background: 'rgba(255, 255, 255, 0.5)',
  outline: '0',
  transition: 'all 300ms ease',
}}
&:focus {
${{
  boxShadow: '0 0 30px 2px rgba(0,0,0,0.2)',
  border: 'solid 2px rgba(255, 255, 255, 1)',
  background: 'rgba(255, 255, 255, 0.8)',
}}
}
@media screen and (min-width: 1024px){
${{
  fontSize: '20px',
  padding: '10px 20px',
}}
}
@media screen and (max-width: 480px){
${{
  fontSize: '15px',
  padding: '5px 10px',
}}
}
`

export const ContactTitle = styled.input`
${input}
`

export const ContactFrom = styled.input`
${input}
`

export const ContactContent = styled.textarea`
${input}
${{
  resize: 'none',
}}
@media screen and (min-width: 1024px){
${{
  height: '110px',
}}
}
@media screen and (max-width: 480px){
${{
  height: '70px',
}}
}
`

export const SenderWrapper = styled.div`
${{
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}}
`

export const Sender = styled.button`
${{
background: 'rgba(253, 172, 167, 1)',
borderRadius: '50%',
border: 'solid 2px rgba(255, 255, 255, 0)',
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
color: '#FFF',
fontSize: '20px',
transition: 'all 500ms ease',
boxShadow: '0 0 30px 2px rgba(0,0,0,0.2)',
}}

&:hover {${{
  background: 'rgba(253, 162, 157, 1)',
  boxShadow: '0 0 40px 2px rgba(0,0,0,0.4)',
  border: 'solid 2px rgba(255, 255, 255, 1)',
}}}

&:disabled {${{
  background: 'rgba(200, 200, 200, 1)',
  cursor: 'not-allowed',
}}}

&:focus {${{
  background: 'rgba(253, 162, 157, 1)',
  boxShadow: '0 0 40px 2px rgba(0,0,0,0.4)',
  border: 'solid 2px rgba(255, 255, 255, 1)',
}}}

@media screen and (min-width: 1024px){
${{
  width: '80px',
  height: '80px',
}}
}
@media screen and (max-width: 480px){
${{
  width: '60px',
  height: '60px',
}}
}
`

export const SenderIcon = styled(FontAwesomeIcon)`
${{
  color: '#FFF',
  fontSize: '30px',
  margin: '0 0 -2px -5px'
}}
`
