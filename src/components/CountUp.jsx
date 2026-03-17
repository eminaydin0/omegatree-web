import React, { useState, useEffect } from 'react'

export default function CountUp({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const step = end / (duration / 40)
    const t = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(t)
      } else setCount(Math.floor(start))
    }, 40)
    return () => clearInterval(t)
  }, [end, duration])
  return <>{count}{suffix}</>
}
