import React from 'react'
import GameMenuContext from '..'
import { usePlayerScore } from '@hooks/usePlayerData'

export type GameMenuContextProviderInterface = {
  checkResult: () => boolean
}

export type GameMenuContextValueType = {
  score?: number
  refreshUserScore?: () => void
}

const GameMenuProvider: React.FC<React.PropsWithChildren> = (
  { children }
) => {
  const { score, refreshUserScore } = usePlayerScore()
  return (
    <GameMenuContext.Provider
      value={
        { score, refreshUserScore }
      }
    >
      {children}
    </GameMenuContext.Provider>
  )
}

export default GameMenuProvider