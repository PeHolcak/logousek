import { useCallback, useState, useEffect } from 'react'
import { MessageInstance } from 'antd/es/message/interface'
import { AurasEnum, CharacterEnum } from '@constants/shop'
import { buyItemCall, getAvaibleItemsCall } from 'calls/shop-calls'
import { useTranslateFunctions } from './useTranslateFunctions'

type ItemType = AurasEnum | CharacterEnum

const useShop = (
  messageApi: MessageInstance,
  refreshUserScore: () => void,
  userScore: number
) => {
  const { tError, tGameMenu } = useTranslateFunctions()
  const [itemInProgress, setItemInProgress] = useState<ItemType>()
  const [avaibleItems, setAvaibleItems] = useState<string[]>([])
  const [currentUserScore, setCurrentUserScore] = useState<number>(0)
  const [avaibleItemsLoadingState, setAvaibleItemsLoadingState] =
    useState<string>('loading')

  useEffect(() => {
    setCurrentUserScore(userScore)
  }, [userScore])

  const loadAvaibleItems = useCallback(async () => {
    setAvaibleItemsLoadingState('loading')
    try {
      const data = await getAvaibleItemsCall()
      const avaibleItems = data?.data?.avaibleItems
      setAvaibleItems(avaibleItems ?? [])
      setAvaibleItemsLoadingState('ready')
    } catch (err) {
      console.error(err)
      setAvaibleItemsLoadingState('error')
    }
  }, [])

  const buyItem = useCallback(
    async (itemName: ItemType, cost: number) => {
      try {
        setItemInProgress(itemName)
        const res = await buyItemCall(itemName)
        if (res.status === 200) {
          messageApi.open({
            type: 'success',
            content: tError('getDataError'),
          })
          setItemInProgress(undefined)
        } else {
          messageApi.open({
            type: 'error',
            content: tGameMenu('purchasedSuccessfully'),
          })
          setItemInProgress(undefined)
        }
      } catch (err) {
        messageApi.open({
          type: 'error',
          content: tError('getDataError'),
        })
        setItemInProgress(undefined)
      } finally {
        refreshUserScore()
        loadAvaibleItems()
        setCurrentUserScore((v) => v - cost)
      }
    },
    [loadAvaibleItems, messageApi, refreshUserScore, tError, tGameMenu]
  )

  return {
    buyItem,
    itemInProgress,
    avaibleItems,
    avaibleItemsLoadingState,
    fetchShopData: loadAvaibleItems,
    currentUserScore,
  }
}

export default useShop
