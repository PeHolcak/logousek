import React from 'react'
import * as S from "./styled"

export type RectItemProps = { name: string, icon: string, title: string, onClick: () => void }

const RectItem: React.FC<RectItemProps> = ({ title, icon, onClick }) => {
  return (
    <S.RectItemWrapper onMouseDown={onClick}>
      <S.Picture src={icon} />
      <S.RectItemDesc>{title}</S.RectItemDesc>
    </S.RectItemWrapper>
  )
}

export default RectItem
