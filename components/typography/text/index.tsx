import React from 'react'
import * as S from './styled'

export type Variant = 'T1' | 'T2' | 'T3' | 'T4' | 'T5' | 'T6' | 'T7'

type TextProps = {
  variant: Variant
  children: string
}

const Text: React.FC<TextProps> = ({ variant, children }) => {
  return <S.TextWrap variant={variant}>{children}</S.TextWrap>
}

export default Text
