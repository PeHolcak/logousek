import React from 'react'
import Animate from '../animate'

type FadeInProps = { children: React.ReactElement }

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  return (
    <Animate
      fromStyles={{ opacity: 0, translateTo: '0 5rem', scale: 1 }}
      toStyles={{ opacity: 1, translateTo: 'none', scale: 1 }}
    >
      {children}
    </Animate>
  )
}

export default FadeIn
