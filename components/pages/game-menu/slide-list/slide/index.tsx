import React from 'react'

import Label from '@components/label'
import GameCard from '@components/game-card'
import { LabelType, GameType } from '@constants/activity-confs/activity-conf'

import * as S from './styled'

const getCards = (games?: GameType[]) => {
  const notNullgames = Array.isArray(games) ? games : []
  return notNullgames.map((game, index) => (
    <GameCard key={`Card-${game.name}-${index}`} gameInfo={game} />
  ))
}

const getLabels = (labels?: LabelType[]) => {
  const notNullLabels = Array.isArray(labels) ? labels : []
  return notNullLabels.map((label, index) => (
    <Label key={`label-${index}-${label.name}`} color={label.color}>
      {label.description}
    </Label>
  ))
}

type SlideProps = {
  name: string
  title: string
  labels?: LabelType[]
  description?: string
  cite?: string
  games: GameType[]
}

const Slide: React.FC<SlideProps> = ({
  name,
  title,
  labels,
  description,
  cite,
  games,
}) => {
  return (
    <S.SlideWrapper key={`slide_${name}`}>
      <S.GameTypeDetail>
        <S.GamesTypeHeader>{title}</S.GamesTypeHeader>
        <S.LabelWrapper>{getLabels(labels)}</S.LabelWrapper>
        <S.GamesTypeContent>{description}</S.GamesTypeContent>
        <S.CitationParagraph>{cite}</S.CitationParagraph>
      </S.GameTypeDetail>
      <S.GameList>{getCards(games)}</S.GameList>
    </S.SlideWrapper>
  )
}

export default Slide
