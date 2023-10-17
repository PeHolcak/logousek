import { NextApiResponse, NextApiRequest } from 'next/types'

import addScoreDtoIn from 'backend/dtoIn/add-score'

import {
  getUserById,
} from 'backend/dao/user'

import {
  addScore,
} from 'backend/dao/score'
import {
  addCredit,
  createCredit,
  getCreditByUserId
} from 'backend/dao/credit'
import checkUnsupportedKeys from 'backend/dtoIn/check-unsupported-keys'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // 1. Check httpMethod
  if (req.method === "POST") {

    //2. Check dtoIn
    if (typeof req?.body !== "object" || !await addScoreDtoIn.isValid(req?.body)) {
      //2.1. dtoIn is not valid
      return res.status(400).json({
        errorCode: 'wrong_dto_in',
      })
    }
    //2.2. dtoIn contains keys beyond the scope of dtoInType
    const warnings = checkUnsupportedKeys(["userId", "points", "activityType", "results", "difficulty"], req.body)

    const { userId, points, activityType, results, difficulty } = req?.body || {}

    //3. Check if the userId from dtoIn exists
    let user
    try {
      user = await getUserById(userId)
    } catch (err) {
      //3.1. Failed to get data from the database and an error was thrown
      console.error(err)
      return res.status(400).json({
        errorCode: 'server_error',
        warnings: warnings
      })
    }

    //3.2. UserId from dtoIn does not exists. return user_not_found error
    if (!user) {
      return res.status(400).json({
        errorCode: 'user_not_found',
        warnings: warnings
      })
    }


    let isUserCreditExists = false;

    try {
      console.log("test9393", await getCreditByUserId(userId))
      isUserCreditExists = Boolean(await getCreditByUserId(userId))
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        errorCode: "server_error",
        warnings: warnings
      })
    }

    try {
      if (isUserCreditExists) {
        await addCredit(userId, points)
      } else {
        await createCredit(userId, points)
      }
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        errorCode: "server_error",
        warnings: warnings
      })
    }

    //4. Add score to the database
    try {
      await addScore(userId, points, activityType, difficulty, results)
      //5. Returns properly filled dtoOut.
      return res.status(200).json({
        warnings: warnings
      })
    } catch (error) {
      //4.1. Failed to get data from the database and an error was thrown
      console.error(error)
      return res.status(500).json({
        errorCode: "server_error",
        warnings: warnings
      })
    }

  } else {
    //1.1. ERROR - If httpMethod is not POST return not_found error
    return res.status(404).json({
      errorCode: 'endpoint_not_found'
    })
  }
}
