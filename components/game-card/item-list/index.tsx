import React from 'react'

import * as S from './styled'

type ItemListProps = {
  items: {
    id: number
    level: number
    points: number
  }[]
  onItemClick: (itemId: number) => void
}

const ItemList: React.FC<ItemListProps> = ({ items, onItemClick }) => {
  const getStars = (level: number) => {
    return new Array(level).fill(<i className={'material-icons'}>star</i>)
  }

  const formedItems = Array.isArray(items)
    ? items.map((item) => (
        <S.StyledListItem
          key={`list-item-${item.id}`}
          onClick={() =>
            typeof onItemClick === 'function' && onItemClick(item.id)
          }
        >
          <span>{item.id}</span>
          <S.StarsWrap level={item.level}>{getStars(item.level)}</S.StarsWrap>
          <span>{item.points}</span>
        </S.StyledListItem>
      ))
    : []

  return <S.StyledList>{formedItems}</S.StyledList>
}

export default ItemList
