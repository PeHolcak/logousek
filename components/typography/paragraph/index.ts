import styled from 'styled-components'
import {
  TextWrapType,
  T1Styles,
  T2Styles,
  T3Styles,
  T4Styles,
  T5Styles,
  T6Styles,
  T7Styles,
} from '../text/styled'

type ParagraphType = Omit<TextWrapType, 'variant'>

export const P1 = styled.p<ParagraphType>`
  ${T1Styles};
`

export const P2 = styled.p<ParagraphType>`
  ${T2Styles};
`

export const P3 = styled.p<ParagraphType>`
  ${T3Styles};
`

export const P4 = styled.p<ParagraphType>`
  ${T4Styles};
`

export const P5 = styled.p<ParagraphType>`
  ${T5Styles}
`

export const P6 = styled.p<ParagraphType>`
  ${T6Styles};
`

export const P7 = styled.p<ParagraphType>`
  ${T7Styles};
`
