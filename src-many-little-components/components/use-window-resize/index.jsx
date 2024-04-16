/* eslint-disable no-unused-vars */
import { useLayoutEffect, useState } from 'react'
/**
 * useEffect是在组件渲染到屏幕之后延迟执行副作用，
 * 而useLayoutEffect则会在浏览器执行绘制之前同步执行副作用。
 */
export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }
  useLayoutEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}
