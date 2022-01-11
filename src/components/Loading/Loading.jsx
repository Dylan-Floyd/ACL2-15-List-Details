import React, { useEffect, useState } from 'react'

export default function Loading() {
  const [dotCount, setDotCount] = useState(0)

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setDotCount(dotCount => dotCount === 3 ? 0 : dotCount + 1)
    }, 250)
    return () => {
      clearInterval(intervalRef)
    }
  }, [])

  return (
    <h2>{'Loading' + '.'.repeat(dotCount)}</h2>
  )
}
