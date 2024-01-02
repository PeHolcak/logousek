import styled from 'styled-components'
import { devices } from '../../../constants/screens-conf'

export const ApplicationNavigationWrapper = styled.div`
  @media ${devices.laptop} {
    flex: 1;
  }
`

export const ItemRectListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const DarkModeSwitchWrapper = styled.div<{ isMenuShow: boolean }>`
  display: none;
  position: absolute;
  bottom: 24px;
  left: 4px;
  transition-duration: 0.5s;
  transform: ${({ isMenuShow }) =>
    isMenuShow ? 'rotate(0deg)' : 'rotate(90deg)'};

  @media ${devices.laptop} {
    display: block;
  }
`
