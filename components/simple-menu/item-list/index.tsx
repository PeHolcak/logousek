import React from 'react'
import Item from './item'
import { ItemType } from './item'
import * as S from "./styled"

type ItemListProps = { itemList: Omit<ItemType, "isMenuShow">[], setIsMenuShow: (value: boolean) => void, isMenuShow: boolean }

const ItemList: React.FC<ItemListProps> = ({ itemList, isMenuShow, setIsMenuShow }) => {
  const arrayItemList = Array.isArray(itemList) ? itemList : []

  const onItemClickHandle = (onClickCallback: () => void) => {
    setIsMenuShow(false)
    onClickCallback()
  }

  return (
    <S.List>
      {arrayItemList.map((item) => (
        <Item
          key={`sidebar-item-${item.name}`}
          onClick={() => onItemClickHandle(item.onClick)}
          icon={item.icon}
          title={item.title}
          name={item.name}
          isMenuShow={isMenuShow}
        />
      ))}
    </S.List>
  )
}

export default ItemList
