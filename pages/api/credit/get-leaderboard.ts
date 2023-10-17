import { NextApiRequest, NextApiResponse } from 'next'

import getScoreCountdtoIn from 'backend/dtoIn/get-score-count'
import checkUnsupportedKeys from 'backend/dtoIn/check-unsupported-keys'

import {
    getUserById,
} from 'backend/dao/user'
import { listCredit } from 'backend/dao/credit'


const APP_TO = 8

type Warnings = ({
    code?: string;
    unSupportedKeys?: string[];
})[]

type GetLeaderBoardDtoOut = {
    currentUser?: object,
    errorCode?: string,
    warnings?: Warnings,
    users?: {
        "id": string,
        "createdAt": Date,
        "userId": string,
        "amount": number,
        "userLogin": string
    }[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<GetLeaderBoardDtoOut>) {
    // 1. Check httpMethod
    if (req.method === "GET") {
        //2. Check dtoIn
        if (typeof req?.query !== "object" || !await getScoreCountdtoIn.isValid(req?.query)) {
            //2.1. dtoIn is not valid
            return res.status(400).json({
                errorCode: 'wrong_dto_in',
            })
        }
        //2.2. dtoIn contains keys beyond the scope of dtoInType
        const warnings = checkUnsupportedKeys(["userId"], req.body)


        const { userId } = req.query

        //3. Check if the userId from dtoIn exists
        let currentUser
        try {
            currentUser = await getUserById(userId)
        } catch (err) {
            //3.1. Failed to get data from the database and an error was thrown
            console.error(err)
            return res.status(400).json({
                errorCode: 'server_error',
                warnings: warnings
            })
        }

        //3.2. UserId from dtoIn does not exists. return user_not_found error
        if (!currentUser) {
            return res.status(400).json({
                errorCode: 'user_not_found',
                warnings: warnings
            })
        }

        let theBestUsers = []

        try {
            const result = await listCredit(APP_TO);
            theBestUsers = result
        } catch (error) {
            return res.status(500).json({
                errorCode: "server_error",
                warnings: warnings
            })
        }


        const theBestUsersWithName = []
        for (const theBestUser of theBestUsers) {
            const user = await getUserById(userId)
            theBestUsersWithName.push({ ...theBestUser, userLogin: user.type === "HOST" ? "Host" : user.nickName as string })
        }

        return res.status(200).json({
            users: theBestUsersWithName,
            currentUser: {

            }
        })

    } else {
        //1.1. ERROR - If httpMethod is not POST return not_found error
        return res.status(404).json({
            errorCode: 'endpoint_not_found'
        })
    }
}
