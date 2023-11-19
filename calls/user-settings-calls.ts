import { callApi } from './calls'
import { GetUserSettingsDtoOut } from 'pages/api/user-settings/get-settings'
import { SetSettingsDtoOut } from 'pages/api/user-settings/set-settings'

export const setSettingsCall = (characterName?: string, auraName?: string) => {
    return callApi<SetSettingsDtoOut>(
        'user-settings/set-settings',
        { characterName, auraName },
        'POST'
    )
}

export const getUserSettingsCall = () => {
    return callApi<GetUserSettingsDtoOut>('user-settings/get-settings', {}, 'GET')
}
