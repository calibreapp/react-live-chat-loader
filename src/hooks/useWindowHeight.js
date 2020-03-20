import { useState, useEffect } from 'react'

const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 740
  )

  const handleResize = () => setWindowHeight(window.innerHeight)

  useEffect(() => {
    typeof window !== 'undefined'
      ? window.addEventListener('resize', handleResize)
      : null
    return () => {
      typeof window !== 'undefined'
        ? window.removeEventListener('resize', handleResize)
        : null
    }
  }, [])

  return windowHeight
}

export default useWindowHeight
