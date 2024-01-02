import React from 'react'
import RectItem, { RectItemProps } from './rect-item/index'
import * as S from './styled'

type ItemRectListProps = { itemList: RectItemProps[] }

const ItemRectList: React.FC<ItemRectListProps> = ({ itemList }) => {
  const arrayItemList = Array.isArray(itemList) ? itemList : []

  return (
    <S.ListWrapper>
      {arrayItemList.map((item) => (
        <RectItem
          key={`side-bar-rect-item-${item.name}`}
          icon={item.icon}
          title={item.title}
          name={item.name}
          onClick={item.onClick}
        />
      ))}
    </S.ListWrapper>
  )
}

export default ItemRectList
