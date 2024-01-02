import styled from 'styled-components'
import { fontSize } from 'styles'

export const ItemTitleWrapper = styled.a<{ isSelected: boolean }>`
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.black} !important;
  font-size: ${fontSize.lg};
  user-select: none;
`

export const ItemDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
