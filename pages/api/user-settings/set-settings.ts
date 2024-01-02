import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

import checkUnsupportedKeys from 'backend/dtoIn/check-unsupported-keys'
import {
  createUserSettings,
  getUserSettings,
  setSettingsToUserSettings,
} from 'backend/dao/user-settings'
import { getPurchaseByUserId } from 'backend/dao/purchase'
import setSettingsDtoIn from 'backend/dtoIn/set-settings'
import { authOptions } from '../auth/[...nextauth]'
import { DEFAULT_AURA, DEFAULT_CHARACTER } from '@constants/shop'
import { getUserById } from 'backend/dao/user'

type Warnings = {
  code?: string
  unSupportedKeys?: string[]
}[]

type SetSettingsRequest = NextApiRequest & {
  CharacterName?: string
  auraName?: string
}

export type SetSettingsDtoOut = {
  errorCode?: string
  warnings?: Warnings
}

export default async function handler(
  req: SetSettingsRequest,
  res: NextApiResponse<SetSettingsDtoOut>
) {
  const session = await getServerSession(req, res, authOptions)
  const currentUserId = (session as any)?.user?.id

  const characterName = req?.body?.characterName
  const auraName = req?.body?.auraName

  // 1. Check httpMethod
  if (req.method === 'POST') {
    //2. Check dtoIn
    if (
      typeof req?.query !== 'object' ||
      !(await setSettingsDtoIn.isValid(req?.body))
    ) {
      //2.1. dtoIn is not valid
      return res.status(400).json({
        errorCode: 'wrong_dto_in',
      })
    }
    //2.2. dtoIn contains keys beyond the scope of dtoInType
    const warnings = checkUnsupportedKeys(['SettingsName'], req.body)

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

    // 4. Checks if the user has purchased the item
    let isItemsPurchase = false
    try {
      const userPurchasedItems = await getPurchaseByUserId(currentUserId)
      const isAuraPurchased =
        auraName && auraName !== DEFAULT_AURA
          ? userPurchasedItems?.purchase?.includes(auraName)
          : true
      const isCharacterPurchased =
        characterName && characterName !== DEFAULT_CHARACTER
          ? userPurchasedItems?.purchase?.includes(characterName)
          : true

      isItemsPurchase = !!isAuraPurchased && !!isCharacterPurchased
    } catch (err) {
      //4.1. Failed to get data from the database and an error was thrown
      console.error(err)
      return res.status(500).json({
        errorCode: 'server_error',
        warnings: warnings,
      })
    }

    // 4.2. If the item is not purchased by user, the error user_has_not_purchased_this_item is returned
    if (!isItemsPurchase) {
      return res.status(403).json({
        errorCode: 'user_has_not_purchased_this_item',
        warnings: warnings,
      })
    }

    // 5. Checks if the user has already saved settings in the database
    let hasUserSettings = false
    try {
      //5.1. Gets the user's settings from the database
      hasUserSettings = Boolean(await getUserSettings(currentUserId))
    } catch (err) {
      //5.1.1. Failed to get data from the database and an error was thrown
      console.error(err)
      return res.status(500).json({
        errorCode: 'server_error',
        warnings: warnings,
      })
    }

    // 5.2. If the user has the settings in the database, he updates the existing table
    if (hasUserSettings) {
      try {
        await setSettingsToUserSettings(currentUserId, auraName, characterName)
      } catch (err) {
        //5.2.1. Failed to get data from the database and an error was thrown
        console.error(err)
        return res.status(500).json({
          errorCode: 'server_error',
          warnings: warnings,
        })
      }
    } else {
      // 5.3. If it doesn't, it creates a new record
      try {
        await createUserSettings(currentUserId, auraName, characterName)
      } catch (err) {
        //5.3.1. Failed to get data from the database and an error was thrown
        console.error(err)
        return res.status(500).json({
          errorCode: 'server_error',
          warnings: warnings,
        })
      }
    }

    // 6. Returns properly filled dtoOut.
    return res.status(200).send({})
  }
}
