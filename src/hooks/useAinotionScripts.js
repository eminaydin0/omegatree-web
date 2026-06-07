import { useEffect } from 'react'

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.src = src
    script.async = false
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.body.appendChild(script)
  })
}

export default function useAinotionScripts() {
  useEffect(() => {
    let cancelled = false

    async function initTemplateScripts() {
      try {
        await loadScript('/assets/js/jquery.min.js')
        await loadScript('/assets/js/bootstrap.min.js')
        await loadScript('/assets/js/plugins.js')
        await loadScript('/assets/js/custom.js')

        if (!cancelled && window.jQuery) {
          window.jQuery(window).trigger('load')
        }
      } catch (error) {
        console.error(error)
      }
    }

    initTemplateScripts()

    return () => {
      cancelled = true
    }
  }, [])
}
