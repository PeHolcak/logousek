import { useEffect, useState } from 'react'

function useElementOnScreen(
  ref: React.RefObject<HTMLDivElement> | null,
  rootMargin = '0px'
) {
  const [isIntersecting, setIsIntersecting] = useState(true)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { rootMargin }
    )
    const current = ref?.current
    if (current) {
      observer.observe(current)
    }
    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [ref, rootMargin])
  return isIntersecting
}

export default useElementOnScreen
