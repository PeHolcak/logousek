import React from 'react'

type CoreContextType =
  | { theme: string; changeTheme: (value: string) => void }
  | undefined

export default React.createContext<CoreContextType>(undefined)
