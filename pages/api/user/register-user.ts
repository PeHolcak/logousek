// import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next'

import registerUserDtoIn from 'backend/dtoIn/register-user'

import {
  createUser,
  getUserByName,
} from 'backend/dao/user'
import checkUnsupportedKeys from 'backend/dtoIn/check-unsupported-keys'

async function registerUser(req: NextApiRequest, res: NextApiResponse) {
  // 1. Check httpMethod
  if (req.method === "POST") {

    //2. Check dtoIn
    if (typeof req.body !== "object" || !await registerUserDtoIn.isValid(req.body)) {
      //2.1. dtoIn is not valid
      return res.status(400).json({
        errorCode: 'wrong_dto_in',
      })
    }

    //2.2. dtoIn contains keys beyond the scope of dtoInType
    const warnings = checkUnsupportedKeys(["firstName", "nickName", "password", "surName"], req.body)

    //3. Check if a user with the same name already exists
    const user = req.body
    let usersWithSameNick;
    try {
      usersWithSameNick = await getUserByName(user.nickName)
    } catch (err) {
      //3.1.1. ERROR - Failed to get data from the database and an error was thrown.
      console.error(err)
      return res.status(400).json({
        errorCode: 'server_error',
        warnings: warnings
      })
    }

    //3.1.2. A user with the same name already exists.
    if (usersWithSameNick && usersWithSameNick.length) {
      return res.status(400).json({ errorCode: "user_exists", warnings })
    }

    //4. Create user
    try {
      await createUser(user)
      return res.status(200).json({ warnings })
    } catch (err) {
      //4.1. ERROR - Failed to get data from the database and an error was thrown
      return res.status(500).json({
        errorCode: 'server_error',
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

export default registerUser