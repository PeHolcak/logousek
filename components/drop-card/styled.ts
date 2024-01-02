import styled, { css } from 'styled-components'

type DragableAreaProps = { cursor: 'pointer' | 'default' }

export const DragableArea = styled.div<DragableAreaProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100% - 3px);

  background-color: ${({ theme }) => theme.colors.lightGrey};

  margin: 1.5px;

  ${({ cursor }) =>
    cursor === 'pointer'
      ? css`
          cursor: pointer;
          &:hover {
            opacity: 0.7;
          }
        `
      : null}
`

export const DragableAreaIcon = styled.i`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: 700;
`
