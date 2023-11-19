// pages/api/purchase.js
import checkUnsupportedKeys from 'backend/dtoIn/check-unsupported-keys'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

import { getPurchaseByUserId } from 'backend/dao/purchase'


type Warnings = {
    code?: string
    unSupportedKeys?: string[]
}[]

type GetAvaibleItemsRequest = NextApiRequest

export type GetAvaibleItemsDtoOut = {
    avaibleItems?: string[]
    errorCode?: string
    warnings?: Warnings
}


export default async function handler(
    req: GetAvaibleItemsRequest,
    res: NextApiResponse<GetAvaibleItemsDtoOut>
) {
    const session = await getSession({ req })
    const currentUserId = (session as any)?.user?.id

    // 1. Check httpMethod
    if (req.method === 'GET') {
        //2.2. dtoIn contains keys beyond the scope of dtoInType
        const warnings = checkUnsupportedKeys([], req.body)


        //3. Check if the userId from dtoIn exists
        try {
            if (currentUserId) {
                const avaibleItems = await getPurchaseByUserId(currentUserId)
                return res.status(200).send({
                    avaibleItems: avaibleItems?.purchase
                })
            }
        } catch (err) {
            //3.1. Failed to get data from the database and an error was thrown
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
