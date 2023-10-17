import React, { useMemo } from 'react'

import * as S from './styled'
import CashValue from '../../../cash-value'
import Reference from '@components/reference'
import { IMAGES_REFERENCE } from '@constants/character-conf'

type StoreItemProps = {
  imageSrc?: string
  customContent?: React.ReactNode
  name: string
  label: string
  cost: string | number
  isOwned: boolean
}

const StoreItem: React.FC<StoreItemProps> = ({
  imageSrc,
  label,
  cost,
  isOwned,
  customContent,
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
      <S.StoreItemContainer isOwned={isOwned}>
        <S.Label align="center">{label}</S.Label>
        <S.ImageWrap>{getContent}</S.ImageWrap>
      </S.StoreItemContainer>
      <S.Cost align="center">{costcustomContent}</S.Cost>
    </S.StoreItemWrapper>
  )
}

export default StoreItem
