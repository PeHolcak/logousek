import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { Engine } from 'tsparticles-engine'
import { loadFireworksPreset } from 'tsparticles-preset-fireworks'

import { useFireworks } from '@hooks/useFireworks'

const Fireworks: React.FC = () => {
  const fireworksOptions = useFireworks()

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFireworksPreset(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={fireworksOptions}
    />
  )
}

export default Fireworks
