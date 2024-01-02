import { GetBuyItemDtoOut } from 'pages/api/shop/buy-item'
import { callApi } from './calls'
import { AurasEnum, CharacterEnum } from '@constants/shop'
import { GetAvaibleItemsDtoOut } from 'pages/api/shop/get-avaible-items'

export const buyItemCall = (itemName: AurasEnum | CharacterEnum) => {
  return callApi<GetBuyItemDtoOut>('shop/buy-item', { itemName }, 'POST')
}

export const getAvaibleItemsCall = () => {
  return callApi<GetAvaibleItemsDtoOut>('shop/get-avaible-items', {}, 'GET')
}
