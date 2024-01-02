import styled from 'styled-components'
import { devices } from '@constants/screens-conf'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.eighty};
  z-index: 2;
  flex: 1;
`
export const WelcomeRowWrapper = styled.div`
  position: relative;

  @media ${devices.laptop} {
    display: flex;
  }
`

export const HomeWrapper = styled.div`
  scroll-behavior: smooth;
  overflow-y: overlay;
  overflow-x: hidden;
`

export const Section = styled.section`
  width: 100%;
  height: 100vh;
`
