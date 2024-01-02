import React from 'react'
import Particles from 'react-tsparticles'
import { loadConfettiPreset } from 'tsparticles-preset-confetti'

import { useConfetti } from '@hooks/useConfetti'

export default function Confetti() {
  const confettiOptions = useConfetti()

  const loadConfetti = async (engine: any) => {
    await loadConfettiPreset(engine)
  }

  return (
    <Particles id="tsparticles" init={loadConfetti} options={confettiOptions} />
  )
}
