import { useState, useEffect } from 'react'

const useWindowHeight = (): number => {
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 0
  )

  const handleResize = () => setWindowHeight(window.innerHeight)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight)
      window.addEventListener('resize', handleResize)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return windowHeight
}

export default useWindowHeight
