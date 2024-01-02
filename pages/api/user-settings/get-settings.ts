// pages/api/purchase.js
import checkUnsupportedKeys from 'backend/dtoIn/check-unsupported-keys'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

import { getUserSettings } from 'backend/dao/user-settings'
import { UserSettings } from '@prisma/client'
import { authOptions } from '../auth/[...nextauth]'
import { getUserById } from 'backend/dao/user'
import getSettingsDtoIn from 'backend/dtoIn/get-settings'

type Warnings = {
  code?: string
  unSupportedKeys?: string[]
}[]

type GetUserSettingsRequest = NextApiRequest

export type GetUserSettingsDtoOut = {
  userSettings?: UserSettings
  errorCode?: string
  warnings?: Warnings
}

export default async function handler(
  req: GetUserSettingsRequest,
  res: NextApiResponse<GetUserSettingsDtoOut>
) {
  const session = await getServerSession(req, res, authOptions)
  const currentUserId = (session as any)?.user?.id

  // 1. Check httpMethod
  if (req.method === 'GET') {
    //2. Check dtoIn
    if (!(await getSettingsDtoIn.isValid(req?.query ?? {}))) {
      //2.1. dtoIn is not valid
      return res.status(400).json({
        errorCode: 'wrong_dto_in',
      })
    }
    //2.2. dtoIn contains keys beyond the scope of dtoInType
    const warnings = checkUnsupportedKeys([], req.body)

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

    // 4. Gets the settings of the current user
    try {
      const userSettings = await getUserSettings(currentUserId)

      // 5. Returns properly filled dtoOut.
      return res.status(200).send({
        userSettings: userSettings ?? undefined,
        warnings: warnings,
      })
    } catch (err) {
      //4.1. Failed to get data from the database and an error was thrown
      console.error(err)
      return res.status(500).json({
        errorCode: 'server_error',
        warnings: warnings,
      })
    }
  } else {
    //1.1. ERROR - If httpMethod is not POST return not_found error
    return res.status(404).json({
      errorCode: 'endpoint_not_found',
    })
  }
}
