// import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next'

import authorize from 'backend/middleware/authorize'
import checkUnsupportedKeys from 'backend/dtoIn/check-unsupported-keys'
import deleteUserDtoIn from 'backend/dtoIn/delete-user'

import {
  deleteUser,
  getUserById,
} from 'backend/dao/user'

async function deleteUserMiddleware(req: NextApiRequest, res: NextApiResponse) {
  // 1. Check httpMethod
  // The method must be post because an array is being sent in dtoIn
  if (req.method === "POST") {
    const isAuthorized = await authorize(req, res, "ADMIN")
    //2. Check if the user has rights to call this endpoint
    if (isAuthorized) {
      //3. Check dtoIn
      if (typeof req?.body !== "object" || !await deleteUserDtoIn.isValid(req?.body)) {
        //3.1. dtoIn is not valid
        return res.status(400).json({
          errorCode: 'wrong_dto_in',
        })
      }
      //3.2. dtoIn contains keys beyond the scope of dtoInType
      const warnings = checkUnsupportedKeys(["userId", "to", "from", "activityTypes"], req.body)

      const { userId } = req.body

      //4. Check if the userId from dtoIn exists
      let user
      try {
        user = await getUserById(userId)
      } catch (err) {
        //4.1. Failed to get data from the database and an error was thrown
        console.error(err)
        return res.status(400).json({
          errorCode: 'server_error',
          warnings: warnings
        })
      }

      //4.2. UserId from dtoIn does not exists. return user_not_found error
      if (!user) {
        return res.status(400).json({
          errorCode: 'user_not_found',
          warnings: warnings
        })
      }

      //4.3. User is Admin.
      if (user.type === "ADMIN") {
        return res.status(400).json({
          errorCode: 'admin_cannot_be_deleted',
        })
      }

      //5. Delete user from the database
      try {
        await deleteUser(userId)

        //6. Returns properly filled dtoOut.
        return res.status(200).json({
          warnings: warnings
        })
      } catch (err) {
        //5.1. Failed to get data from the database and an error was thrown
        return res.status(500).json({
          warnings: warnings
        })
      }
    } else {
      //2.1. User has not right to call this endpoint
      return res.status(401).json({
        errorCode: 'not_authorize',
      })
    }
  } else {
    //1.1. ERROR - If httpMethod is not POST return not_found error
    return res.status(404).json({
      errorCode: 'endpoint_not_found'
    })
  }
}

export default deleteUserMiddleware