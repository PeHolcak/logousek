import styled from 'styled-components'

export const SwitchWrapper = styled.div`
  position: relative;
  width: 3.5rem;
  cursor: pointer;
`

type SwitchPointerProps = { enabled: boolean }

export const SwitchPointer = styled.div<SwitchPointerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.4rem;
  width: 1.4rem;
  border-radius: ${({ theme }) => theme.radius.primary};
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 0.2rem;
  left: ${({ enabled }) => (enabled ? '1.8rem' : '0.2rem')};
  transition-duration: 0.5s;
`

export const SwitchBackground = styled.div`
  height: 1.8rem;
  border-radius: ${({ theme }) => theme.radius.primary};
  background: ${({ theme }) => theme.colors.black};
`
