import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  0% {
    transform: translate(10px, 100%) skewX(20deg);
  }
  100% {
    transform: translate(0, 0%) skewX(0deg);
  }
`

export const SplitType = styled.span`
  display: inline-block;
  transform: translate(0, 100%);
  animation: ${slideIn} 1s cubic-bezier(0.680, -0.550, 0.265, 1.550) ${props => props.itemType}ms 1 forwards;
`
