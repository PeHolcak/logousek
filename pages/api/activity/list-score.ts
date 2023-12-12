import { NextApiRequest, NextApiResponse } from 'next'
import { Score } from '@prisma/client'

import checkUnsupportedKeys from 'backend/dtoIn/check-unsupported-keys'
import listScoredtoIn from 'backend/dtoIn/list-score'

import { getScoreByUserId } from 'backend/dao/score'

import { getUserById } from 'backend/dao/user'
import { ErrorDtoOut, Warnings } from 'types/api-types'

type ListScoreRequest = NextApiRequest & {
    selectUser?: string
    from?: string
    to?: string
    activityTypes?: string[]
}

export type listScoreCreditDtoOut =
    {
        data?: Score[]
        warnings?: Warnings
    }
    & ErrorDtoOut

export default async function handler(
    req: ListScoreRequest,
    res: NextApiResponse<listScoreCreditDtoOut>
) {
    // 1. Check httpMethod
    // The method must be post because an array is being sent in dtoIn
    if (req.method === 'POST') {
        //2. Check dtoIn
        if (
            typeof req?.body !== 'object' ||
            !(await listScoredtoIn.isValid(req?.body))
        ) {
            //2.1. dtoIn is not valid
            return res.status(400).json({
                errorCode: 'wrong_dto_in',
            })
        }
        //2.2. dtoIn contains keys beyond the scope of dtoInType
        const warnings = checkUnsupportedKeys(
            ['userId', 'to', 'from', 'activityTypes'],
            req.body
        )

        const { userId, activityTypes, from, to } = req?.body

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

        //4. List score from the database
        try {
            const result = await getScoreByUserId({ userId, activityTypes, from, to })

            //5. Returns properly filled dtoOut.
            return res.status(200).json({
                data: result,
                warnings: warnings,
            })
        } catch (error) {
            //4.1. Failed to get data from the database and an error was thrown
            return res.status(500).json({
                errorCode: 'server_error',
            })
        }
    } else {
        //1.1. ERROR - If httpMethod is not POST return not_found error
        return res.status(404).json({
            errorCode: 'endpoint_not_found',
        })
    }
}
