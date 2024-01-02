import styled from 'styled-components'
import { P5 } from '@components/typography/paragraph'

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Link = styled(P5)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.red};
`

export const LoginButtonsWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    margin: 1rem;
  }
`

export const Header = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px;
`
