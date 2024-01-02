import { useCallback, useEffect, useState } from 'react'
import { MessageInstance } from 'antd/es/message/interface'
import { getUserSettingsCall, setSettingsCall } from 'calls/user-settings-calls'
import { UserSettings } from '@prisma/client'

import { useTranslateFunctions } from './useTranslateFunctions'

const useUserSettings = (messageApi: MessageInstance) => {
  const { tError, tGameMenu } = useTranslateFunctions()
  const [dataState, setDataState] = useState('loading')
  const [updateSettingsState, setUpdateSettingsState] = useState('ready')
  const [userSettings, setUserSettings] = useState<UserSettings | undefined>()

  const loadUserSettings = useCallback(async () => {
    try {
      const data = await getUserSettingsCall()
      setUserSettings(data?.data?.userSettings)
      setDataState('success')
    } catch (err) {
      console.error(err)
      setDataState('error')
    }
  }, [setDataState, setUserSettings])

  const onSetUserSettingsHandler = useCallback(
    async (characterName?: string, auraName?: string) => {
      try {
        setUpdateSettingsState('loading')
        const res = await setSettingsCall(characterName, auraName)
        if (res.status === 200) {
          messageApi.open({
            type: 'success',
            content: tGameMenu('characterChangeSuccessfully'),
          })
        } else {
          messageApi.open({
            type: 'error',
            content: tError('userSettings.characterChangeError'),
          })
        }
      } catch (err) {
        messageApi.open({
          type: 'error',
          content: tError('userSettings.characterChangeError'),
        })
      } finally {
        await loadUserSettings()
        setUpdateSettingsState('ready')
      }
    },
    [messageApi, loadUserSettings, tError, tGameMenu]
  )

  return {
    userSettings,
    onSetUserSettingsHandler,
    fetchUserSettingsData: loadUserSettings,
    dataState,
    updateSettingsState,
  }
}

export default useUserSettings
