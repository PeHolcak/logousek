import { NextApiResponse, NextApiRequest } from 'next/types'

import addScoreDtoIn from 'backend/dtoIn/add-score'

import { getUserById } from 'backend/dao/user'

import { addScore } from 'backend/dao/score'
import { addCredit, createCredit, getCreditByUserId } from 'backend/dao/credit'
import checkUnsupportedKeys from 'backend/dtoIn/check-unsupported-keys'
import { ErrorDtoOut, Warnings } from 'types/api-types'

export type getScoreCountDtoOut =
  | {
      warnings?: Warnings
    }
  | ErrorDtoOut

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 1. Check httpMethod
  if (req.method === 'POST') {
    //2. Check dtoIn
    if (
      typeof req?.body !== 'object' ||
      !(await addScoreDtoIn.isValid(req?.body))
    ) {
      //2.1. dtoIn is not valid
      return res.status(400).json({
        errorCode: 'wrong_dto_in',
      })
    }
    //2.2. dtoIn contains keys beyond the scope of dtoInType
    const warnings = checkUnsupportedKeys(
      ['userId', 'points', 'activityType', 'results', 'difficulty'],
      req.body
    )

    const { userId, points, activityType, results, difficulty } =
      req?.body || {}

    //3. Check if the userId from dtoIn exists
    let user
    try {
      user = await getUserById(userId)
    } catch (err) {
      //3.1. Failed to get data from the database and an error was thrown
      console.error(err)
      return res.status(400).json({
        errorCode: 'server_error',
        warnings: warnings,
      })
    }

    //3.2. UserId from dtoIn does not exists. return user_not_found error
    if (!user) {
      return res.status(400).json({
        errorCode: 'user_not_found',
        warnings: warnings,
      })
    }

    //4. Checks if the user already has any credit
    let isUserCreditExists = false

    try {
      isUserCreditExists = Boolean(await getCreditByUserId(userId))
    } catch (error) {
      //4.1. Failed to get data from the database and an error was thrown. return server_error error
      console.error(error)
      return res.status(500).json({
        errorCode: 'server_error',
        warnings: warnings,
      })
    }

    try {
      //4.2. If the user already has the credit, then they add it to their existing credits
      if (isUserCreditExists) {
        await addCredit(userId, points)
      } else {
        //4.3. If the user does not have credit, then they create a new
        await createCredit(userId, points)
      }
    } catch (error) {
      //4.4. Failed to save data to the database and an error was thrown. return server_error error
      console.error(error)
      return res.status(500).json({
        errorCode: 'server_error',
        warnings: warnings,
      })
    }

    //5. Add score to the database
    try {
      await addScore(userId, points, activityType, difficulty, results)
      //6. Returns properly filled dtoOut.
      return res.status(200).json({
        warnings: warnings,
      })
    } catch (error) {
      //5.1. Failed to get data from the database and an error was thrown
      console.error(error)
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
