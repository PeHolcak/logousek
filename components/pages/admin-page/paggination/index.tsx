import React from 'react'

import * as S from './styled'

type PagginationType = {
  maxIndexes: number
  onLinkClick: (index: number) => void
  currentList: number
}

const Paggination: React.FC<PagginationType> = ({
  maxIndexes,
  onLinkClick,
  currentList,
}) => {
  const getLinks = () => {
    const linkArray: React.ReactNode[] = []
    if (maxIndexes > 1) {
      for (let i = 0; i < maxIndexes; i++) {
        linkArray.push(
          <S.Link
            onClick={() => onLinkClick(i)}
            isActive={currentList === i}
            key={i}
          >
            {i}
          </S.Link>
        )
      }
      return linkArray
    }
    return linkArray
  }

  return <S.LinksWrapper>{getLinks()}</S.LinksWrapper>
}

export default Paggination
