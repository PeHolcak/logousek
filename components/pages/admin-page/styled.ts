import styled from 'styled-components'

import { devices } from 'constants/screens-conf'

export const AdminPageWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${devices.laptop} {
    display: flex;
  }
`

export const AdminPageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.eighty};
  z-index: 2;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  padding: 24px;
  width: 100%;
`

export const AdminPageInnerContainer = styled.div`
  width: 1200px;
`

export const ClickableIconWrapper = styled.div`
  padding: 16px;
`
