import React, { useState, useEffect, useCallback } from 'react'
import { message } from 'antd'

import useUserSettings from '@hooks/use-user-settings'
import UserSettingsContext from '..'

export type UserSettingsContextValueType = {
  character?: string
  aura?: string
  setUserSettings: (aura: string, character: string) => void
  updateSettingsState: string
  dataState: string
}

const UserSettingsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [messageApi] = message.useMessage()

  const {
    userSettings,
    onSetUserSettingsHandler,
    fetchUserSettingsData,
    dataState,
    updateSettingsState,
  } = useUserSettings(messageApi)

  useEffect(() => {
    fetchUserSettingsData()
  }, [fetchUserSettingsData])

  const setUserSettings = useCallback(
    (aura: string, character: string) => {
      onSetUserSettingsHandler(aura, character)
    },
    [onSetUserSettingsHandler]
  )

  return (
    <UserSettingsContext.Provider
      value={{
        character: userSettings?.character,
        aura: userSettings?.aura,
        setUserSettings,
        updateSettingsState,
        dataState,
      }}
    >
      {children}
    </UserSettingsContext.Provider>
  )
}

export default UserSettingsProvider
