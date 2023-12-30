import React from 'react'

import FadeIn from '@components/animations/fade-in'
import activityConf from '@constants/activity-confs/activity-conf'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import TwoSideCard from '@components/two-side-card'
import publicImages from '@constants/public-images'

import SectionLayout from '../section-layout'
import Header from "../header"
import * as S from "./styled"



const getCards = () => {
  const notDisabledActivityConf = activityConf.filter(activity => !activity.disabled)

  return notDisabledActivityConf.map(cardConf => (
    <FadeIn key={cardConf.name}>
      <TwoSideCard
        name={cardConf.name}
        title={cardConf.title}
        image={cardConf.image || publicImages.activityIcons.differentiation}
        description={cardConf.description}
        onMainSideClick={() => { }}
      />
    </FadeIn >)
  )
}

const GameInfo: React.FC = () => {
  const { tHome } = useTranslateFunctions()
  const cards = getCards();
  return (
    <S.GameInfoWrapper id="gameInfo">
      <S.GameInfoContainer>
        <SectionLayout>
          <Header>{tHome("gameInfo.header")}</Header>
          <S.GameInfoArticles>
            {cards}
          </S.GameInfoArticles>
        </SectionLayout>
      </S.GameInfoContainer>
    </S.GameInfoWrapper>
  )
}

export default GameInfo