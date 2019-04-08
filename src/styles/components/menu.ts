import styled from 'styled-components'
import transition from 'styled-transition-group'

export const Entire = transition.nav.attrs({
  unmountOnExit: true,
})`
&:enter {
  transform: skewX(0deg) translateX(-130%);
}
&:enter-active {
  transform: skewX(-20deg) translateX(-50%);
  transition: transform 400ms cubic-bezier(0.250, 0.460, 0.450, 0.940);
}
&:exit {
  transform: skewX(-20deg) translateX(-50%);
}
&:exit-active {
  transform: skewX(0deg) translateX(-130%);
  transition: transform 400ms cubic-bezier(0.250, 0.460, 0.450, 0.940);
}
  transform: skewX(-20deg) translateX(${(props: any) => props.itemID});
  ${{
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 0px 30px 3px rgba(0,0,0,0)',
    transition: 'all 600ms ease-out',
  }}
  @media screen and (min-width: 1024px){
    width: ${(props: any) => props.itemProp};
  }
  @media screen and (max-width: 480px){
    width: ${(props: any) => props.itemProp === '700px' ? '120vw': '280vw'};
  }
`

export const LinkBox = styled.ul`
  opacity: ${props => props.itemProp};
  ${{
    height: '50vh',
    transform: 'skewX(20deg) translateX(50%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'column',
    transition: 'opacity 400ms ease-out',
  }}
  @media screen and (min-width: 1024px){
  ${{
    marginLeft: '130px',
  }}
  }
  @media screen and (max-width: 480px){
  ${{
    marginLeft: '50px',
  }}
  }
`

export const LinkItem = styled.li`
  ${{
    // borderBottom: 'solid 1px #555',
    overflowY: 'hidden',
    overflowX: 'visible',
  }}
`

export const Link = styled.a`
  ${{
    display: 'block',
    color: '#555',
    transition: 'all 200ms ease-in-out',
    letterSpacing: '5px',
    fontFamily: 'Raleway, sans-serif',
  }}
  @media screen and (min-width: 1024px){
  ${{
    fontSize: '80px',
  }}
  }
  @media screen and (max-width: 480px){
  ${{
    fontSize: '50px',
  }}
  }
`

export const UnderBorder = styled.div`
${{
  width: '0px',
  height: '5px',
  background: '#555',
  transition: 'all 200ms cubic-bezier(0.250, 0.460, 0.450, 0.940)',
  transform: 'translateX(-10px)',
  borderRadius: '4px',
}}
`

export const LinkWrapper = styled.div`
  &:hover ${Link} {
    ${{
      color: '#000',
      letterSpacing: '8px',
    }}
  }

  &:hover ${UnderBorder} {
    ${{
      width: '100px',
      background: '#000',
    }}
  }
`
