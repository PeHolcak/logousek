import React from 'react'
import { UserSettingsContextValueType } from './user-settings-context-provider'

export default React.createContext<UserSettingsContextValueType | null>(null)
