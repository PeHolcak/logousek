// pages/api/purchase.js
import { NextApiRequest, NextApiResponse } from 'next'

import { getUserById } from 'backend/dao/user'
import buyItemDtoIn from 'backend/dtoIn/buy-item'
import checkUnsupportedKeys from 'backend/dtoIn/check-unsupported-keys'
import { AURAS_CONFIG, CHARACTERS_CONFIG, ItemType } from '@constants/shop'
import { getCreditByUserId, removeCredit } from 'backend/dao/credit'
import {
  createPurchase,
  getPurchaseByUserId,
  updatePurchase,
} from 'backend/dao/purchase'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

type Warnings = {
  code?: string
  unSupportedKeys?: string[]
}[]

type BuyItemRequest = NextApiRequest & {
  body: { itemName?: string }
}

export type GetBuyItemDtoOut = {
  errorCode?: string
  warnings?: Warnings
}

const getItemConf = (itemName: string) => {
  const allItems: ItemType[] = [...CHARACTERS_CONFIG, ...AURAS_CONFIG]
  return allItems.find((item) => item.name === itemName)
}

export default async function handler(
  req: BuyItemRequest,
  res: NextApiResponse<GetBuyItemDtoOut>
) {
  const session = await getServerSession(req, res, authOptions)
  const currentUserId = (session as any)?.user?.id
  const itemName = req?.body?.itemName

  // 1. Check httpMethod
  if (req.method === 'POST') {
    //2. Check dtoIn
    if (
      typeof req?.query !== 'object' ||
      !(await buyItemDtoIn.isValid(req?.body))
    ) {
      //2.1. dtoIn is not valid
      return res.status(400).json({
        errorCode: 'wrong_dto_in',
      })
    }
    //2.2. dtoIn contains keys beyond the scope of dtoInType
    const warnings = checkUnsupportedKeys(['itemName'], req.body)

    //3. Check if the userId from session exists
    let isCurrentUserExist = false
    try {
      if (currentUserId) {
        const currentUserData = await getUserById(currentUserId)
        isCurrentUserExist = Boolean(currentUserData)
      }
    } catch (err) {
      //3.1. Failed to get data from the database and an error was thrown
      console.error(err)
      return res.status(500).json({
        errorCode: 'server_error',
        warnings: warnings,
      })
    }

    // 3.2. UserId from dtoIn does not exists. return user_not_found error
    if (!isCurrentUserExist) {
      console.error('User does not exists')
      return res.status(400).json({
        errorCode: 'user_not_exist',
        warnings: warnings,
      })
    }

    // 4. Finds out from the configuration how much the item costs
    const itemConf = getItemConf(itemName)
    const itemCost = itemConf?.cost ?? 0

    // 5. Gets the current credit value of the user
    let userCredit = 0
    try {
      userCredit = (await getCreditByUserId(currentUserId))?.amount ?? 0
    } catch (err) {
      //5.1. Failed to get data from the database and an error was thrown
      console.error(err)
      return res.status(500).json({
        errorCode: 'server_error',
        warnings: warnings,
      })
    }

    // 6. If the user has less credit than the item is worth, error not_enough_money is returned
    if (userCredit < itemCost) {
      return res.status(400).json({
        errorCode: 'not_enough_money',
        warnings: warnings,
      })
    }

    // 7. If the item is not worth 0 then the user is stripped of as much credit as the item is worth
    if (itemCost !== 0) {
      try {
        await removeCredit(currentUserId, itemCost)
      } catch (err) {
        //7.1. Failed to get data from the database and an error was thrown
        console.error(err)
        return res.status(500).json({
          errorCode: 'server_error',
          warnings: warnings,
        })
      }
    }

    // 8. Checks if a user purchase record exists
    let userPurchase = null
    try {
      userPurchase = (await getPurchaseByUserId(currentUserId))?.purchase
    } catch (err) {
      //8.1. Failed to get data from the database and an error was thrown
      console.error(err)
      return res.status(500).json({
        errorCode: 'server_error',
        warnings: warnings,
      })
    }

    if (userPurchase) {
      // 8.2.1. If it exists, the item is added to an existing record
      try {
        const newPurchaseItems = [...new Set([...userPurchase, itemName])]
        await updatePurchase(currentUserId, newPurchaseItems)
      } catch (err) {
        //8.2.2. Failed to get data from the database and an error was thrown
        console.error(err)
        return res.status(400).json({
          errorCode: 'server_error',
          warnings: warnings,
        })
      }
    } else {
      // 8.3.1. If it does not exist, a new one is created
      try {
        await createPurchase(currentUserId, itemName)
      } catch (err) {
        //8.3.2. Failed to get data from the database and an error was thrown
        console.error(err)
        return res.status(400).json({
          errorCode: 'server_error',
          warnings: warnings,
        })
      }
    }

    // 9. Returns properly filled dtoOut.
    return res.status(200).send({})
  }
}
