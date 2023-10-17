import styled from 'styled-components'

export const TopPlayerWrapper = styled.div`
  display: flex;
  gap: 40px;

  & > *:nth-child(2) {
    transform: scale(1.15) translateY(32px);
  }

  margin: 16px;
`

export const CharacterSelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Others = styled.div`
  width: 100%;
  border-top-right-radius: ${({ theme }) => theme.radius.secondary};
  border-top-left-radius: ${({ theme }) => theme.radius.secondary};

  background: ${({ theme }) => theme.colors.lightGrey};
`

export const Player = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  padding: 16px;

  &:last-child {
    border-bottom: none;
  }
`

export const Name = styled.span``

export const Rank = styled.span``

export const Score = styled.span`
  font-weight: bold;
`

export const CurrentPlayer = styled.div`
  border-bottom-left-radius: ${({ theme }) => theme.radius.secondary};
  border-bottom-right-radius: ${({ theme }) => theme.radius.secondary};
  background: ${({ theme }) => theme.colors.primary};
`

export const Space = styled.span`
    display: flex;
    justify-content: center;
    gap: 4px;
`


export const Dot = styled.div`
    width: 8px;
    aspect-ratio: 1;

    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.black};
`