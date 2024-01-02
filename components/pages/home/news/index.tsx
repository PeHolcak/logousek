import React from 'react'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import Header from '../header'
import TimeLine from './time-line'
import SectionLayout from '../section-layout'
import * as S from './styled'

const News: React.FC = () => {
  const { tHome } = useTranslateFunctions()

  return (
    <S.NewsWrapper id="news">
      <SectionLayout>
        <Header>{tHome('news.header')}</Header>
        <TimeLine />
      </SectionLayout>
    </S.NewsWrapper>
  )
}

export default News
