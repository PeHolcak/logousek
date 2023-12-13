import React from 'react'

import ActivityCard from '@components/activity-card'
import Blob from '@components/svg/blob/blob'
import { AuraType, ItemType, AurasEnum } from '@constants/shop'

import CharacterItem from '../store-item'

type AuraActivityCardProps = {
  onAuraClickHandler: (name: string, isOwnedByLoggedUser: boolean) => void
  selectedAuras: string
  itemInProgress: ItemType | undefined
  buyItem: (itemName: AurasEnum) => Promise<void>
  isDisabled: boolean
  isOwnedByLoggedUser: boolean
} & AuraType

const AuraActivityCard: React.FC<AuraActivityCardProps> = ({
  onAuraClickHandler,
  selectedAuras,
  itemInProgress,
  buyItem,
  isDisabled,
  isOwnedByLoggedUser,
  ...auraConfig
}) => {
  return (
    <ActivityCard
      fill
      onClick={() => {
        onAuraClickHandler(auraConfig.name, isOwnedByLoggedUser)
      }}
      selected={selectedAuras === auraConfig.name}
      disabled={isDisabled}
    >
      <CharacterItem
        isOwned={isOwnedByLoggedUser}
        name={auraConfig.name}
        disabled={isDisabled}
        customContent={
          <Blob
            name={auraConfig.name}
            color={auraConfig.color}
            isBlobShowed={true}
          />
        }
        label={auraConfig.label}
        cost={auraConfig.cost}
        onItemBuyHandler={() => {
          buyItem(auraConfig.name)
        }}
        isInProgress={
          (auraConfig.name as ItemType['name'] | undefined) === itemInProgress
        }
      />
    </ActivityCard>
  )
}

export default AuraActivityCard
