import styled from 'styled-components'
import { devices } from '@constants/screens-conf'

export const ProgressContainer = styled.div`
  width: 100%;
  padding: 4px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.black};
  box-sizing: border-box;
  @media ${devices.tablet} {
    width: 300px;
  }
`

type ProgressBarInnerType = { width: string }

export const ProgressBarInner = styled.div<ProgressBarInnerType>`
  width: ${({ width }) => width};
  height: 12px;
  border-radius: 20px;
  transition-duration: 0.3s;
  background-color: ${({ theme }) => theme.colors.primary};

  @media ${devices.laptop} {
    height: 16px;
  }
`

export const ProgressBarWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media ${devices.tablet} {
    width: auto;
  }
`
