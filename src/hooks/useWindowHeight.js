import { useState, useEffect } from 'react'

const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const handleResize = () => setWindowHeight(window.innerHeight)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowHeight
}

export default useWindowHeight
