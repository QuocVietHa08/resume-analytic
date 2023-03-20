import { useState , useEffect } from 'react'

const useDetectWindowSize = () => {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    const handleResizeWindow = () => {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResizeWindow);
    handleResizeWindow();

    return () => window.removeEventListener('resize', handleResizeWindow);
  })

  return windowSize
}

export default useDetectWindowSize;