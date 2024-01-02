import React from 'react'

import ActivityCard from '@components/activity-card'

import { Description, InformIcon } from '../styled'
import * as S from './styled'

type MainSideContentProps = {
  name: string
  title: string
  image: string
  showSecondSide: () => void
}

const MainSideContent: React.FC<MainSideContentProps> = ({
  name,
  title,
  image,
  showSecondSide,
}) => {
  const onInformIconClickHandle = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    showSecondSide()
  }

  return (
    <ActivityCard fill={true}>
      <S.Container>
        <InformIcon onClick={onInformIconClickHandle}>
          <i className={`material-icons`}>inform</i>
        </InformIcon>
        <S.Image src={image} alt={`${name}-image`} />
        <Description>{title}</Description>
      </S.Container>
    </ActivityCard>
  )
}

export default MainSideContent
