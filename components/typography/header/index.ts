import styled from 'styled-components'
import {
  TextWrapType,
  T1Styles,
  T2Styles,
  T3Styles,
  T4Styles,
  T5Styles,
  T6Styles,
} from '../text/styled'
import { devices } from 'constants/screens-conf'

export type HeaderType = Omit<TextWrapType, 'variant'>

export const H1 = styled.h1<HeaderType>`
  ${T1Styles};
`

export const H2 = styled.h2<HeaderType>`
  ${T2Styles};
`

export const H3 = styled.h3<HeaderType>`
  ${T3Styles};
`

export const H4 = styled.h4<HeaderType>`
  ${T4Styles};
`

export const H5 = styled.h5<HeaderType>`
  ${T5Styles}
`

export const H6 = styled.h6<HeaderType>`
  ${T6Styles};
`

export const PageTitle = styled(H1)`
  margin: 0px;
  font-size: ${({ theme }) => theme.typography.fontSize.pageTitle.mobile};
  font-weight: ${({ theme }) => theme.typography.fontWeight.lg};
  letter-spacing: ${({ theme }) =>
    theme.typography.letterSpacing.pageTitle.mobile};
  line-height: ${({ theme }) => theme.typography.lineHeight.pageTitle.mobile};

  @media ${devices.laptop} {
    font-size: ${({ theme }) => theme.typography.fontSize.pageTitle.desktop};
    letter-spacing: ${({ theme }) =>
      theme.typography.letterSpacing.pageTitle.desktop};
    line-height: ${({ theme }) =>
      theme.typography.lineHeight.pageTitle.desktop};
  }
`
