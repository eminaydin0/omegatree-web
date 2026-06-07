import { useEffect, useRef } from 'react'

export default function useSlickSlider(options) {
  const ref = useRef(null)

  useEffect(() => {
    let timer
    let $el

    const cleanup = () => {
      const $ = window.jQuery
      if ($?.fn?.slick && $el?.hasClass('slick-initialized')) {
        $el.slick('unslick')
      }
    }

    const init = () => {
      const $ = window.jQuery
      if (!$?.fn?.slick || !ref.current) return false

      $el = $(ref.current)
      if ($el.hasClass('slick-initialized')) {
        $el.slick('unslick')
      }
      $el.slick(options)
      return true
    }

    if (!init()) {
      timer = setInterval(() => {
        if (init()) clearInterval(timer)
      }, 250)
    }

    return () => {
      clearInterval(timer)
      cleanup()
    }
  }, [])

  return ref
}
