import React from 'react'
import * as S from './styled'

type HeaderWrapperProps = {
  children: React.ReactElement[] | React.ReactElement | string
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  return <S.HeaderContainer>{children}</S.HeaderContainer>
}

export default HeaderWrapper
