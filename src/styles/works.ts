import styled from 'styled-components'

export const Entire = styled.main`
${{
  width: '100vw',
  height: '100vh',
  overflowY: 'scroll',
  background: 'rgba(253, 172, 167, 1)',
}}
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
  fontSize: '30px',
  letterSpacing: '3px',
  textIndent: 'calc(1em + 3px)',
}}
`
