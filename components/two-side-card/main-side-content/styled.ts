import styled from 'styled-components'

export const InformIcon = styled.div`
  cursor: help;
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  z-index: 1;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.secondary};
  color: ${({ theme }) => theme.colors.seventy};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.45s linear;
    background: ${({ theme }) => theme.colors.seventy};
  }

  & > i {
    position: relative;
    width: 24px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  flex: 1;
`
