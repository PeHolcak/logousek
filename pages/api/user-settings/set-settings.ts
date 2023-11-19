// pages/api/purchase.js
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

import checkUnsupportedKeys from 'backend/dtoIn/check-unsupported-keys'
import { createUserSettings, getUserSettings, setSettingsToUserSettings } from 'backend/dao/user-settings'
import { getPurchaseByUserId } from 'backend/dao/purchase'
import setSettingsDtoIn from 'backend/dtoIn/set-settings'

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
    const session = await getSession({ req })
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

        let isItemsPurchase = false
        try {
            const userPurchasedItems = await getPurchaseByUserId(currentUserId)
            const isAuraPurchased = auraName ? userPurchasedItems?.purchase?.includes(auraName) : true
            const isCharacterPurchased = characterName ? userPurchasedItems?.purchase?.includes(characterName) : true

            isItemsPurchase = !!isAuraPurchased && !!isCharacterPurchased
        } catch (err) {
            //3.1. Failed to get data from the database and an error was thrown
            console.error(err)
            return res.status(500).json({
                errorCode: 'server_error',
                warnings: warnings,
            })
        }

        if (!isItemsPurchase) {
            return res.status(403).json({
                errorCode: 'user_has_not_purchased_this_item',
                warnings: warnings,
            })
        }

        let hasUserSettings = false
        try {
            hasUserSettings = Boolean(await getUserSettings(currentUserId))
        } catch (err) {
            //3.1. Failed to get data from the database and an error was thrown
            console.error(err)
            return res.status(500).json({
                errorCode: 'server_error',
                warnings: warnings,
            })
        }

        if (hasUserSettings) {
            try {
                await setSettingsToUserSettings(currentUserId, auraName, characterName)
            } catch (err) {
                //3.1. Failed to get data from the database and an error was thrown
                console.error(err)
                return res.status(500).json({
                    errorCode: 'server_error',
                    warnings: warnings,
                })
            }
        }
        else {
            try {
                await createUserSettings(currentUserId, auraName, characterName)
            } catch (err) {
                //3.1. Failed to get data from the database and an error was thrown
                console.error(err)
                return res.status(500).json({
                    errorCode: 'server_error',
                    warnings: warnings,
                })
            }
        }


        return res.status(200).send({})
    }
}
