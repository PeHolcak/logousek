import React, { useMemo } from 'react'

import * as S from './styled'
import CashValue from '@components/pages/game-menu/header/cash-value'
import Reference from '@components/reference'
import { IMAGES_REFERENCE } from '@constants/character-conf'
import Overlap from './Overlap'

type StoreItemProps = {
  imageSrc?: string
  customContent?: React.ReactNode
  name: string
  label: string
  cost: number
  isOwned: boolean
  onItemBuyHandler: () => void
  disabled: boolean
  isInProgress: boolean
}

const StoreItem: React.FC<StoreItemProps> = ({
  imageSrc,
  label,
  cost,
  isOwned,
  customContent,
  onItemBuyHandler,
  disabled,
  isInProgress,
}) => {
  const costcustomContent = useMemo(() => {
    if (typeof cost === 'number') {
      return <CashValue score={cost.toString()} />
    }

    return cost
  }, [cost])

  const getContent = useMemo(() => {
    if (customContent) {
      return customContent
    }
    if (imageSrc) {
      return (
        <>
          <S.Image src={imageSrc} />
          <Reference reference={IMAGES_REFERENCE} />
        </>
      )
    }
    return null
  }, [customContent, imageSrc])

  return (
    <S.StoreItemWrapper>
      <S.Label align="center">{label}</S.Label>
      <S.ImageWrapper isOwned={isOwned} cost={cost}>
        <S.ImageContainer>{getContent}</S.ImageContainer>
      </S.ImageWrapper>
      <S.Cost align="center">{costcustomContent}</S.Cost>
      <Overlap
        isOwned={isOwned}
        onItemBuyHandler={onItemBuyHandler}
        disabled={disabled}
        isInProgress={isInProgress}
        cost={cost}
      />
    </S.StoreItemWrapper>
  )
}

export default StoreItem
