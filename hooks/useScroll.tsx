import { useEffect, useState, useRef, RefObject } from 'react'

export interface IUseScroll {
  position: number
  isScrollAllowed: boolean
}

const BOUND_WIDTH = 70

function getScrollDirection({
  position,
  leftBounds = Infinity,
  rightBounds = -Infinity,
}: {
  position: number | undefined
  leftBounds: number | undefined
  rightBounds: number | undefined
}): 'left' | 'right' | 'stable' {
  if (position === undefined) {
    return 'stable'
  }
  if (position > rightBounds - BOUND_WIDTH) {
    return 'right'
  }
  if (position < leftBounds + BOUND_WIDTH) {
    return 'left'
  }
  return 'stable'
}

export const useScroll = (ref: RefObject<HTMLElement | null>) => {
  const [config, setConfig] = useState<Partial<IUseScroll>>({
    position: 0,
    isScrollAllowed: false,
  })

  const scrollTimer = useRef<null | NodeJS.Timeout>(null)

  const scrollSpeed = 1
  const { position, isScrollAllowed } = config
  const bounds = ref.current?.getBoundingClientRect()
  const direction = getScrollDirection({
    position,
    leftBounds: bounds?.left,
    rightBounds: bounds?.right,
  })

  useEffect(() => {
    if (direction !== 'stable' && isScrollAllowed) {
      scrollTimer.current = setInterval(() => {
        ref.current?.scrollBy(scrollSpeed * (direction === 'left' ? -1 : 1), 0)
      }, 1)
    }
    return () => {
      if (scrollTimer.current) {
        clearInterval(scrollTimer.current)
      }
    }
  }, [isScrollAllowed, direction, ref, scrollSpeed])

  return { updatePosition: setConfig } as const
}
