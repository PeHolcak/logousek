import styled from 'styled-components'
import { devices } from '@constants/screens-conf'
import { Section } from '../styled'

export const AboutAsWrapper = styled(Section)`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  display: flex;
  justify-content: center;
`

export const AboutAsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom-left-radius: ${({ theme }) => theme.radius.tertialy};
  background-color: ${({ theme }) => theme.colors.eighty};

  @media ${devices.laptop} {
    border-bottom-left-radius: ${({ theme }) => theme.radius.quaternary};
  }
`
