import styled from 'styled-components'

type DailyBonusItemWrapProps = {
  isActive: boolean
}

export const DailyBonusItemWrap = styled.div<DailyBonusItemWrapProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2px;

  background-color: ${({ theme, isActive }) => isActive ? theme.colors.yellow : theme.colors.lightGrey}; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.1);


  padding: 12px;

  border-radius: 12px;

  user-select: none;
`

export const StarWrap = styled.span`
  i {
    font-size: 72px;
  }
  color: ${({ theme }) => theme.colors.white};
`
