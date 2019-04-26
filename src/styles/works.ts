import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
0% {
  opacity: 0;
},
100% {
  opacity: 1;
}
`

export const BackGround = styled.div`
${{
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 78,
  backgroundSize: 'cover',
  transition: 'all 400ms ease',
}}
  animation: ${fadeIn} 600ms ease;
  ${props => props.itemProp ? `background: url('${props.itemProp}') no-repeat center;` : null}
  filter: ${props => props.itemScope ? 'blur(10px)' : 'blur(0px)'};
`

export const Entire = styled.main`
${{
  width: '100vw',
  height: '100vh',
  overflowY: 'scroll',
  background: 'linear-gradient(rgba(253, 172, 167, 0.6), rgba(253, 172, 167, 1))',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 79,
}}
animation: ${fadeIn} 600ms ease;
-webkit-overflow-scrolling: touch;
`

export const TopSection = styled.section`
${{
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 80,
  transition: 'all 400ms ease',
}}
filter: ${props => props.itemScope ? 'blur(10px)' : 'blur(0px)'}; 
`

export const WorksTitleWrapper = styled.div`
${{
  width: '50vw',
  marginBottom: '100px',
  display: 'flex',
  justifyContent: 'center',
}}
`

export const MainContentWrapper = styled.section`
${{
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  position: 'relative',
  zIndex: 81,
  paddingTop: '100vh',
}}
`

export const MainContent = styled.div`
${{
  width: '1020px',
  minHeight: '100vh',
  padding: '100px',
}}
`

export const Paragraph = styled.p`
${{
  color: '#FFF',
  fontSize: '25px',
  lineHeight: '50px',
  letterSpacing: '3px',
  textIndent: 'calc(1em + 3px)',
}}
`

export const Tag = styled.div`
${{
  padding: '0 10px'
}}
`

export const TagWrap = styled.div`
${{
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '50px', 
}}
`

export const UrlWrapper = styled.div`
${{
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}}
`

export const Url = styled.a`
${{
  color: '#FFF',
  display: 'inline-block',
  borderRadius: '50px',
  border: 'solid #FFF 2px',
  textAlign: 'center',
  fontSize: '20px',
  padding: '10px 50px',
  margin: '40px 0',
  transition: 'all 600ms ease'
}}
&:hover {
${{
  color: '#000',
  background: '#FFF',
}}
}
`

export const Images = styled.img`
${{
  width: '100%',
  margin: '100px 0',
}}
`
