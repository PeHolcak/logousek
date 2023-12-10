import React, { useRef } from 'react'

import Pump from '@components/animations/pump'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import publicImages from '@constants/public-images'

import SectionLayout from '../section-layout'
import Header from "../header"
import * as S from "./styled"


const GameSamples: React.FC = () => {
  const { tHome } = useTranslateFunctions()
  const videoEl = useRef<any>(null)
  const handleLoadedMetadata = () => {
    const video = videoEl.current
    if (!video) return
  }

  return (
    <S.GameSamples>
      <SectionLayout>
        <Header>{tHome("gameSamples.header")}</Header>
        <Pump>
          <S.GameSamplesImageWrapper>
            <S.GameSamplesImage src={publicImages.gameSample["01"]} >

              <S.StyledImage src={`/videos/game-samples.gif`} alt="Popis GIFu" />
            </S.GameSamplesImage>
          </S.GameSamplesImageWrapper>
        </Pump>
      </SectionLayout>
    </S.GameSamples >
  )
}

export default GameSamples