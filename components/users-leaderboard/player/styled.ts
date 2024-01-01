import styled, { css } from 'styled-components'

type PlayerType = {
  isFirst: boolean
  isLast: boolean
  isCurrent: boolean
}

export const PlayerContainer = styled.div<PlayerType>`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  margin-bottom:1px;

  &:last-child {
    border-bottom: none;
  }

  ${({ isFirst, isLast, theme }) => {
    if (isFirst) {
      return css`
        border-top-right-radius: ${theme.radius.secondary};
        border-top-left-radius: ${theme.radius.secondary};
      `
    }

    if (isLast) {
      return css`
        border-bottom-right-radius: ${theme.radius.secondary};
        border-bottom-left-radius: ${theme.radius.secondary};
      `
    }

    return css``
  }}

  background: ${({ theme, isCurrent }) =>
    isCurrent ? theme.colors.primary : theme.colors.lightGrey};
`

export const Name = styled.span``

export const Rank = styled.span``

export const Score = styled.span`
  font-weight: bold;

    max-width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
