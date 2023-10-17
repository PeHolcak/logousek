import React, { useMemo, useContext, useState, useCallback } from 'react'
import { ThemeContext } from 'styled-components'

import publicImages from '@constants/public-images'

import * as S from './styled'
import CharacterItem from './StoreItem'
import ActivityCard from '@components/activity-card'
import { H2 } from '@components/typography/header'
import Blob from '@components/svg/blob/blob'
import ButtonRow from '@components/button-row/button-row'
import Button, { ButtonSizesEnum } from '@components/button'

const CHARACTERS_CONFIG = [
  {
    name: 'beaver',
    label: 'Bobr',
    cost: 0,
    imageSrc: publicImages.characters.beaver,
  },
  {
    name: 'rabbit',
    label: 'Králík',
    cost: 500,
    imageSrc: publicImages.characters.rabbit,
  },
  {
    name: 'raccoon',
    label: 'Mýval',
    cost: 700,
    imageSrc: publicImages.characters.raccoon,
  },
  {
    name: 'cat',
    label: 'Kočka',
    cost: 1100,
    imageSrc: publicImages.characters.cat,
  },
  {
    name: 'fox',
    label: 'Liška',
    cost: 2000,
    imageSrc: publicImages.characters.fox,
  },
  {
    name: 'hippo',
    label: 'Hroch',
    cost: 3000,
    imageSrc: publicImages.characters.hippo,
  },
  {
    name: 'seaLion',
    label: 'Lachtan',
    cost: 5000,
    imageSrc: publicImages.characters.seaLion,
  },
  {
    name: 'deer',
    label: 'Jelen',
    cost: 8000,
    imageSrc: publicImages.characters.deer,
  },
  {
    name: 'bear',
    label: 'Medvěd',
    cost: 15000,
    imageSrc: publicImages.characters.bear,
  },
  {
    name: 'elephant',
    label: 'Slon',
    cost: 25000,
    imageSrc: publicImages.characters.elephant,
  },
  {
    name: 'lion',
    label: 'Lev',
    cost: 40000,
    imageSrc: publicImages.characters.lion,
  },
]

const AURAS_CONFIG = [
  {
    name: 'red',
    label: 'Červená',
    cost: 0,
    color: 'red',
  },
  {
    name: 'green',
    label: 'Zelená',
    cost: 1000,
    color: 'green',
  },
  {
    name: 'blue',
    label: 'Modrá',
    cost: 1000,
    color: 'blue',
  },
  {
    name: 'transparent',
    label: 'Průhledná',
    cost: 1000,
    color: 'transparent',
  },
]

const CharacterSelection: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState('deer')
  const [selectedAuras, setSelectedAuras] = useState('green')

  const themeContextData = useContext(ThemeContext)

  const onCharacterClickHandler = useCallback((characterName: string) => {
    setSelectedCharacter(characterName)
  }, [])

  const onAuraClickHandler = useCallback((auraName: string) => {
    setSelectedAuras(auraName)
  }, [])

  const characters = useMemo(
    () =>
      CHARACTERS_CONFIG.map((characterConfig) => (
        <ActivityCard
          fill
          key={`character_${characterConfig.name}`}
          onClick={() => { onCharacterClickHandler(characterConfig.name) }}
          selected={selectedCharacter === characterConfig.name}
        >
          <CharacterItem
            isOwned
            name={characterConfig.name}
            imageSrc={characterConfig.imageSrc}
            label={characterConfig.label}
            cost={characterConfig.cost}
          />
        </ActivityCard>
      )),
    [onCharacterClickHandler, selectedCharacter]
  )
  const auras = useMemo(
    () =>
      AURAS_CONFIG.map((auraConfig) => (
        <ActivityCard
          fill
          key={`character_${auraConfig.name}`}
          onClick={() => {
            onAuraClickHandler(auraConfig.name)
          }}
          selected={selectedAuras === auraConfig.name}
        >
          <CharacterItem
            isOwned
            name={auraConfig.name}
            customContent={
              <Blob
                name={auraConfig.name}
                color={auraConfig.color}
                isBlobShowed={true}
              />
            }
            label={auraConfig.label}
            cost={auraConfig.cost}
          />
        </ActivityCard>
      )),
    [onAuraClickHandler, selectedAuras]
  )

  return (
    <S.CharacterSelectionWrap>
      <S.CharacterSelectionContainer>
        <H2 align="center">Character</H2>
        <S.ItemList>{characters}</S.ItemList>

        <H2 align="center">Aura</H2>
        <S.ItemList>{auras}</S.ItemList>
      </S.CharacterSelectionContainer>
      <ButtonRow>
        <Button
          color={themeContextData.colors.white}
          size={ButtonSizesEnum.s}
          backgroundColor={themeContextData?.colors?.tertiary}
        >
          Potvrdit
        </Button>
      </ButtonRow>
    </S.CharacterSelectionWrap>
  )
}

export default CharacterSelection
