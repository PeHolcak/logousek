// pages/api/purchase.js
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

import checkUnsupportedKeys from 'backend/dtoIn/check-unsupported-keys'
import {
    createUserSettings,
    getUserSettings,
    setSettingsToUserSettings,
} from 'backend/dao/user-settings'
import { getPurchaseByUserId } from 'backend/dao/purchase'
import setSettingsDtoIn from 'backend/dtoIn/set-settings'
import { authOptions } from '../auth/[...nextauth]'
import { DEFAULT_AURA, DEFAULT_CHARACTER } from '@constants/shop'

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
    const session = await getServerSession(req, res, authOptions)
    const currentUserId = (session as any)?.user?.id

    const characterName = req?.body?.characterName
    const auraName = req?.body?.auraName

    console.log('req?.body', req?.body)
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
        console.log('currentUserId32', currentUserId)
        let isItemsPurchase = false
        try {
            const userPurchasedItems = await getPurchaseByUserId(currentUserId)
            const isAuraPurchased =
                auraName && auraName !== DEFAULT_AURA
                    ? userPurchasedItems?.purchase?.includes(auraName)
                    : true
            const isCharacterPurchased =
                characterName && characterName !== DEFAULT_CHARACTER
                    ? userPurchasedItems?.purchase?.includes(characterName)
                    : true

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
        } else {
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
