import React from 'react'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import SectionLayout from '../section-layout'
import AboutUsList from './about-us-list'
import Header from '../header'
import * as S from './styled'

const AboutUs: React.FC = () => {
  const { tHome } = useTranslateFunctions()
  return (
    <S.AboutAsWrapper id="aboutAs">
      <S.AboutAsContainer>
        <SectionLayout>
          <Header>{tHome('aboutAs.header')}</Header>
          <AboutUsList />
        </SectionLayout>
      </S.AboutAsContainer>
    </S.AboutAsWrapper>
  )
}

export default AboutUs
