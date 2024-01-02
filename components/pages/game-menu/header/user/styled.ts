import styled from 'styled-components'

import { devices } from '@constants/screens-conf'
import { TextWrap } from '@components/typography/text/styled'

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const UserPhoto = styled.div`
  width: 40px;
  height: 40px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.secondary};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  cursor: default;
  user-select: none;
`

export const ProfileIcon = styled.i`
  color: ${({ theme }) => theme.colors.white};
`

export const UserName = styled(TextWrap)``
