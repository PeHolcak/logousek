import React from 'react'

import ActivityCard from 'components/activity-card'
import { P6 } from 'components/typography/paragraph'

import { Description, InformIcon } from '../styled'
import * as S from './styled'

type DescriptionSideContentProps = {
  title: string
  description?: string
  showMainSide: () => void
}

const DescriptionSideContent: React.FC<DescriptionSideContentProps> = ({
  title,
  description,
  showMainSide,
}) => {
  const onInformIconClickHandle = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    showMainSide()
  }

  return (
    <ActivityCard fill={true}>
      <S.Navbar>
        <InformIcon onMouseDown={onInformIconClickHandle}>
          <i className={`material-icons`}>reply</i>
        </InformIcon>
      </S.Navbar>
      <S.ContentWrap>
        <Description>{title}</Description>
        <P6 margin="0" align="left">
          {description}
        </P6>
      </S.ContentWrap>
    </ActivityCard>
  )
}

export default DescriptionSideContent
