import React from 'react'

import ActivityCard from '@components/activity-card'
import { CharacterEnum, CharacterType, ItemType } from '@constants/shop'

import CharacterItem from '../StoreItem'

type CharacterActivityCardProps = {
  onCharacterClickHandler: (
    auraName: string,
    isOwnedByLoggedUser: boolean
  ) => void
  selectedCharacter: string
  itemInProgress: ItemType | undefined
  buyItem: (itemName: CharacterEnum) => Promise<void>
  isOwnedByLoggedUser: boolean
  isDisabled: boolean
} & CharacterType

const CharacterActivityCard: React.FC<CharacterActivityCardProps> = ({
  onCharacterClickHandler,
  selectedCharacter,
  itemInProgress,
  buyItem,
  isOwnedByLoggedUser,
  isDisabled,
  ...characterConfig
}) => {
  itemInProgress
  return (
    <ActivityCard
      fill
      key={`character_${characterConfig.name}`}
      onClick={() => {
        onCharacterClickHandler(characterConfig.name, isOwnedByLoggedUser)
      }}
      selected={selectedCharacter === characterConfig.name}
      disabled={isDisabled}
    >
      <CharacterItem
        isOwned={isOwnedByLoggedUser}
        name={characterConfig.name}
        imageSrc={characterConfig.imageSrc}
        label={characterConfig.label}
        cost={characterConfig.cost}
        disabled={isDisabled}
        onItemBuyHandler={() => {
          buyItem(characterConfig.name)
        }}
        isInProgress={
          (characterConfig.name as ItemType['name'] | undefined) ===
          itemInProgress
        }
      />
    </ActivityCard>
  )
}

export default CharacterActivityCard
