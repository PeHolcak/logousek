import React, {
  useMemo,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { ThemeContext } from 'styled-components'
import { message } from 'antd'

import { H2 } from '@components/typography/header'
import ButtonRow from '@components/button-row/button-row'
import Button, { ButtonSizesEnum } from '@components/button'
import useShop from '@hooks/use-shop'
import { AURAS_CONFIG, CHARACTERS_CONFIG, ItemType } from '@constants/shop'

import AuraActivityCard from './aura-activity-card'
import CharacterActivityCard from './character-activity-card'
import * as S from './styled'
import Loading from '@components/loading'
import UserSettingsContext from '@contexts/user-settings-context'
import { P3 } from '@components/typography/paragraph'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

type UserStoreProps = {
  userScore: number
  refreshUserScore: () => void
}

const UserStore: React.FC<UserStoreProps> = ({
  userScore,
  refreshUserScore,
}) => {
  const { tError, tActivity } = useTranslateFunctions()
  const [selectedCharacter, setSelectedCharacter] = useState('deer')
  const [selectedAuras, setSelectedAuras] = useState('green')
  const [messageApi] = message.useMessage()

  const userSettings = useContext(UserSettingsContext)
  const {
    buyItem,
    itemInProgress,
    avaibleItems,
    avaibleItemsLoadingState,
    fetchShopData,
    currentUserScore,
  } = useShop(messageApi, refreshUserScore, userScore)
  const themeContextData = useContext(ThemeContext)

  useEffect(() => {
    fetchShopData()
  }, [fetchShopData])

  useEffect(() => {
    if (userSettings?.updateSettingsState !== 'loading') {
      setSelectedCharacter(userSettings?.character ?? 'beaver')
      setSelectedAuras(userSettings?.aura ?? 'red')
    }
  }, [userSettings])

  const onCharacterClickHandler = useCallback(
    (characterName: string, isOwnedByLoggedUser: boolean) => {
      if (isOwnedByLoggedUser && !itemInProgress) {
        setSelectedCharacter(characterName)
      }
    },
    [itemInProgress]
  )

  const onAuraClickHandler = useCallback(
    (auraName: string, isOwnedByLoggedUser: boolean) => {
      if (isOwnedByLoggedUser && !itemInProgress) {
        setSelectedAuras(auraName)
      }
    },
    [itemInProgress]
  )

  const checkIfIsItemOwned = useCallback(
    (itemName: string) => avaibleItems.includes(itemName),
    [avaibleItems]
  )

  const checkIfIsItemDisable = useCallback(
    (cost: number, isOwned: boolean) => {
      return (
        (Boolean(itemInProgress) ||
          currentUserScore < cost ||
          userSettings?.updateSettingsState === 'loading') &&
        !isOwned
      )
    },
    [itemInProgress, currentUserScore, userSettings?.updateSettingsState]
  )

  const onSubmitHandler = useCallback(() => {
    userSettings?.setUserSettings(selectedCharacter, selectedAuras)
  }, [selectedAuras, selectedCharacter, userSettings])

  const characters = useMemo(
    () =>
      CHARACTERS_CONFIG.map((characterConfig) => {
        const isOwned = checkIfIsItemOwned(characterConfig.name)
        const isDisabled = checkIfIsItemDisable(characterConfig.cost, isOwned)
        return (
          <CharacterActivityCard
            key={`character_${characterConfig.name}`}
            onCharacterClickHandler={onCharacterClickHandler}
            selectedCharacter={selectedCharacter}
            itemInProgress={itemInProgress as ItemType | undefined}
            buyItem={buyItem}
            isOwnedByLoggedUser={isOwned}
            isDisabled={isDisabled}
            {...characterConfig}
          />
        )
      }),
    [
      buyItem,
      checkIfIsItemDisable,
      checkIfIsItemOwned,
      itemInProgress,
      onCharacterClickHandler,
      selectedCharacter,
    ]
  )

  const auras = useMemo(
    () =>
      AURAS_CONFIG.map((auraConfig) => {
        const isOwned = checkIfIsItemOwned(auraConfig.name)
        const isDisabled = checkIfIsItemDisable(auraConfig.cost, isOwned)
        return (
          <AuraActivityCard
            key={`character_${auraConfig.name}`}
            onAuraClickHandler={onAuraClickHandler}
            selectedAuras={selectedAuras}
            itemInProgress={itemInProgress as ItemType | undefined}
            buyItem={buyItem}
            isOwnedByLoggedUser={isOwned}
            isDisabled={isDisabled}
            {...auraConfig}
          />
        )
      }),
    [
      buyItem,
      checkIfIsItemDisable,
      checkIfIsItemOwned,
      itemInProgress,
      onAuraClickHandler,
      selectedAuras,
    ]
  )

  const showLoading = useMemo(
    () =>
      userSettings?.updateSettingsState === 'loading' ||
      Boolean(itemInProgress),
    [itemInProgress, userSettings?.updateSettingsState]
  )

  switch (avaibleItemsLoadingState) {
    case 'loading':
      return <Loading />
    case 'error':
      return <P3>{tError('getDataError')}</P3>
    default:
      return (
        <S.UserStoreWrap>
          <S.StoreContainer>
            {showLoading ? (
              <S.LoadingWrap>
                <Loading hideText />
              </S.LoadingWrap>
            ) : null}
            <S.StoreContent>
              <H2 align="center">Character</H2>
              <S.ItemList>{characters}</S.ItemList>
              <H2 align="center">Aura</H2>
              <S.ItemList>{auras}</S.ItemList>
            </S.StoreContent>
          </S.StoreContainer>
          <ButtonRow>
            <Button
              color={themeContextData.colors.white}
              size={ButtonSizesEnum.s}
              backgroundColor={themeContextData?.colors?.tertiary}
              onClick={onSubmitHandler}
              disabled={showLoading}
            >
              Potvrdit
            </Button>
          </ButtonRow>
        </S.UserStoreWrap>
      )
  }
}

export default UserStore
