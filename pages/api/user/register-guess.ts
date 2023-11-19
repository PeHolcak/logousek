import { NextApiRequest, NextApiResponse } from 'next'
import { TYPE } from '@prisma/client'

import { createUser } from 'backend/dao/user'
import checkUnsupportedKeys from 'backend/dtoIn/check-unsupported-keys'

const DEFAULT_VALUES = {
  firstName: 'Guess',
  surName: null,
  password: null,
  type: TYPE.ADMIN,
}

async function registerGuess(req: NextApiRequest, res: NextApiResponse) {
  // 1. Check httpMethod
  if (req.method === "POST") {

    //2.1. dtoIn contains keys beyond the scope of dtoInType
    const warnings = checkUnsupportedKeys([], req?.body)

    //3. Create a new user
    try {
      const result = await createUser(DEFAULT_VALUES)
      //4. Returns properly filled dtoOut.
      return res.status(200).json({
        nickName: result.nickName,
        warnings
      })
    } catch (err) {
      //3.1.2. ERROR - Failed to create new user
      return res.status(500).json({
        errorCode: 'server_error',
        warnings
      })
    }
  } else {
    //1.1. ERROR - If httpMethod is not POST return not_found error
    return res.status(404).json({
      errorCode: 'endpoint_not_found'
    })
  }
}

export default registerGuess
