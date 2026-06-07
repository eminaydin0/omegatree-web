import { useEffect, useRef } from 'react'

export default function useScrollReveal(options = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -6% 0px', once = true } = options
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-revealed')
          if (once) observer.disconnect()
        } else if (!once) {
          element.classList.remove('is-revealed')
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}
