import React from 'react'
import { P5 } from '@components/typography/paragraph'
import * as S from './styled'

export type ItemType = {
  name: string
  icon: string
  title: string
  onClick: () => void
  isMenuShow: boolean
}

const Item: React.FC<ItemType> = ({ icon, title, onClick, isMenuShow }) => {
  return (
    <S.ItemWrap>
      <S.ItemLink onMouseDown={onClick}>
        <S.ItemIcon className={'material-icons'} isMenuShow={isMenuShow}>
          {icon}
        </S.ItemIcon>
        <P5 margin="0 0 0 16px" align="left">
          {title}
        </P5>
      </S.ItemLink>
    </S.ItemWrap>
  )
}

export default Item
