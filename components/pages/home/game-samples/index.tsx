import React, { useRef } from 'react'

import Pump from '@components/animations/pump'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import publicImages from '@constants/public-images'

import SectionLayout from '../section-layout'
import Header from '../header'
import * as S from './styled'

const GameSamples: React.FC = () => {
  const { tHome } = useTranslateFunctions()

  return (
    <S.GameSamplesWrapper>
      <SectionLayout>
        <Header>{tHome('gameSamples.header')}</Header>
        <Pump>
          <S.GameSamplesImageWrapper>
            <S.GameSamplesImage src={publicImages.gameSample}>
              <S.StyledImage
                src={`/videos/game-samples.gif`}
                alt="game_samples"
              />
            </S.GameSamplesImage>
          </S.GameSamplesImageWrapper>
        </Pump>
      </SectionLayout>
    </S.GameSamplesWrapper>
  )
}

export default GameSamples
