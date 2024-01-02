import React from 'react'
import Animate from '../animate'

type FadeLeftProps = { children: React.ReactElement }

const FadeLeft: React.FC<FadeLeftProps> = ({ children }) => {
  return (
    <Animate
      fromStyles={{ opacity: 0, translateTo: '5rem 0', scale: 1 }}
      toStyles={{ opacity: 1, translateTo: 'none', scale: 1 }}
    >
      {children}
    </Animate>
  )
}

export default FadeLeft
