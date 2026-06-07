import { useEffect, useState } from 'react'

const NAV_SECTIONS = ['home', 'features', 'how-it-works', 'features2', 'about', 'contact']
const SCROLL_OFFSET = 140

export default function useHeaderScrollSpy() {
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const updateActiveSection = () => {
      let current = NAV_SECTIONS[0]

      for (const id of NAV_SECTIONS) {
        const section = document.getElementById(id)
        if (section && section.offsetTop - SCROLL_OFFSET <= window.scrollY) {
          current = id
        }
      }

      setActiveId(current)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return activeId
}
