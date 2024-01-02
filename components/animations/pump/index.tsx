import React from 'react'
import Animate from '../animate'

type PumpProps = { children: React.ReactElement }

const Pump: React.FC<PumpProps> = ({ children }) => {
  return (
    <Animate
      fromStyles={{ opacity: 0, translateTo: 'none', scale: 0.5 }}
      toStyles={{ opacity: 1, translateTo: 'none', scale: 1 }}
    >
      {children}
    </Animate>
  )
}

export default Pump
