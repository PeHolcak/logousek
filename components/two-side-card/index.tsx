import React, { useState } from 'react'

import * as S from './styled'
import MainSideContent from './main-side-content'
import DescriptionSideContent from './description-side-content'

type GameCardProps = {
  name: string
  title: string
  image: string
  description?: string
  onMainSideClick: () => void
}

const TwoSideCard: React.FC<GameCardProps> = ({
  name,
  title,
  image,
  description,
  onMainSideClick
}) => {
  const [isDiffSiteShown, setIsDiffSiteShown] = useState(false)

  const showSecondSide = () => {
    if (!isDiffSiteShown) {
      setIsDiffSiteShown(true)
    }
  }

  const showMainSide = () => {
    setIsDiffSiteShown(false)
  }

  return (
    <S.CardWrapper>
      <S.InnedCard isDiffSiteShown={isDiffSiteShown}>
        <S.MainSideWrapper onClick={onMainSideClick}>
          <MainSideContent
            name={name}
            title={title}
            image={image}
            showSecondSide={showSecondSide} />
        </S.MainSideWrapper>
        <S.DescriptionSideWrapper>
          <DescriptionSideContent
            title={title}
            description={description}
            showMainSide={showMainSide}
          />
        </S.DescriptionSideWrapper>
      </S.InnedCard>
    </S.CardWrapper>
  )
}

export default TwoSideCard
