import styled, { css, keyframes } from 'styled-components'

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
  width: '500px',
  height: '500px',
  borderRadius: '60px',
  border: 'solid 2px #FFF',
  padding: '20px',
  transform: 'translate(-30px, -30px)',
}}
animation: ${scaleIn} 700ms cubic-bezier(1,0,.35,1.2) 300ms 1 forwards;
`

export const FormTitle = styled.h1`
${{
  color: '#FFF',
  fontSize: '90px',
  display: 'inline-block',
  padding: '10px',
  overflowY: 'hidden',
  background: 'rgb(138, 164, 205)',
  transform: 'translate(-65px, -70px)',
  fontFamily: 'Raleway, sans-serif',
  letterSpacing: '10px',
}}
`

export const Form = styled.form`
${{
  width: '100%',
  height: '420px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexDirection: 'column',
  flexWrap: 'wrap',
  opacity: 0,
  transform: 'translate(60px, 0px)',
}}
animation: ${fadeIn} 800ms ease 1200ms 1 forwards;
`

export const InputWrapper = styled.div`
${{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  flexWrap: 'wrap',
  width: '100%',
  height: '280px',
}}
`

const input = css`
${{
  width: '100%',
  padding: '10px 20px',
  color: '#555',
  fontSize: '20px',
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
  height: '110px',
}}
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
width: '80px',
height: '80px',
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
}}}

&:disabled {${{
  background: 'rgba(200, 200, 200, 1)',
  cursor: 'not-allowed',
}}}

`
