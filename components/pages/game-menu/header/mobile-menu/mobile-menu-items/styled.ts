import styled from 'styled-components'

export const MobileMenuItemsWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.eighty};

  margin: 6px 0;
  padding: 12px;

  position: relative;
`

export const CashWrapper = styled.div`
  padding-top: 20px;

  width: 100%;

  display: flex;
  justify-content: center;
`

export const DarkModeSwitchWrapper = styled.div`
  position: absolute;

  top: 28px;
  left: 16px;
`
