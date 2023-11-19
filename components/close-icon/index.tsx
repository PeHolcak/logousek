import React from 'react'
import * as S from './styled'

type CloseIconProps = { onClick: () => void }

const CloseIcon: React.FC<CloseIconProps> = ({ onClick }) => {
  return (
    <S.IconWrapper onMouseDown={onClick}>
      <S.Icon className={'material-icons'}>close</S.Icon>
    </S.IconWrapper>
  )

}

export default CloseIcon;