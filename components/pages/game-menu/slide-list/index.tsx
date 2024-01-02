import React from 'react'
import activityConf from '@constants/activity-confs/activity-conf'
import * as S from './styled'
import Slide from './slide'

type SlideListProps = {
  currentSlide: number
}

const SlideList: React.FC<SlideListProps> = ({ currentSlide }) => {
  return (
    <S.ContentWrapper currentSlide={currentSlide}>
      {activityConf.map((activity) => (
        <Slide
          key={`slide_${activity.name}`}
          name={activity.name}
          title={activity.title}
          labels={activity.labels}
          description={activity.description}
          cite={activity.cite}
          games={activity.games}
        />
      ))}
    </S.ContentWrapper>
  )
}

export default SlideList
