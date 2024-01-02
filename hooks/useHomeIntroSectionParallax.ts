import { useParallax } from 'react-scroll-parallax'
import useWindowDimensions from 'hooks/useWindowDimensions'

export const useHomeIntroParallax = (
  scrollTarget: React.MutableRefObject<HTMLDivElement | null>
) => {
  const windowDimensions = useWindowDimensions()

  const logousekParallax = useParallax<HTMLDivElement>({
    rootMargin: { bottom: 50, top: 0, left: 0, right: 0 },
    scale: [1, 0.35, 'easeInQuad'],
    speed: -5,
    startScroll: 0,
    endScroll: windowDimensions?.height || 1080,
    targetElement: scrollTarget.current ? scrollTarget.current : undefined,
  })

  const descriptionWrapperParallax = useParallax<HTMLDivElement>({
    scale: [1, 1.1, 'ease'],
    opacity: [1, 0, 'easeInQuad'],
    translateY: [0, (windowDimensions?.height || 1080) / 10, 'ease'],
    translateX: [0, (windowDimensions?.width || 1920) / 5, 'easeInQuad'],
    startScroll: 0,
    endScroll: windowDimensions?.height || 1080,
    targetElement: scrollTarget.current ? scrollTarget.current : undefined,
  })

  const hillParallax = useParallax<HTMLDivElement>({
    startScroll: 0,
    translateY: [0, (windowDimensions?.height || 1080) / 15, 'easeInQuad'],
    endScroll: windowDimensions?.height || 1080,
    targetElement: scrollTarget.current ? scrollTarget.current : undefined,
  })

  const firstTreeParallax = useParallax<HTMLDivElement>({
    startScroll: 0,
    translateY: [0, -(windowDimensions?.height || 1080) / 20, 'easeInQuad'],
    translateX: [0, (windowDimensions?.height || 1920) / 15, 'easeInQuad'],
    scale: [1, 2.5, 'easeInQuad'],
    endScroll: windowDimensions?.height || 1080,
    targetElement: scrollTarget.current ? scrollTarget.current : undefined,
  })

  const secondTreeParallax = useParallax<HTMLDivElement>({
    startScroll: 0,
    translateY: [0, -(windowDimensions?.height || 1080) / 20, 'easeInQuad'],
    translateX: [0, -(windowDimensions?.height || 1920) / 15, 'easeInQuad'],
    scale: [1, 2.5, 'easeInQuad'],
    endScroll: windowDimensions?.height || 1080,
    targetElement: scrollTarget.current ? scrollTarget.current : undefined,
  })
  return {
    logousekParallax,
    descriptionWrapperParallax,
    hillParallax,
    firstTreeParallax,
    secondTreeParallax,
  }
}
