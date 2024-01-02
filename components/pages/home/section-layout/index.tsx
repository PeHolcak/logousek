import React from 'react'

import * as S from './styled'

type AboutAsType = {
  children: React.ReactNode
}

const SectionLayout: React.FC<AboutAsType> = ({ children }) => {
  return (
    <S.SectionLayoutWrapper>
      <S.SectionLayoutContainer>{children}</S.SectionLayoutContainer>
    </S.SectionLayoutWrapper>
  )
}

export default SectionLayout
