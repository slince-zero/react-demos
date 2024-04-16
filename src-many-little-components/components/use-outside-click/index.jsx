import { useEffect } from 'react'

export default function useOutsideClick(ref, handler) {
  useEffect(() => {
    function listener(e) {
      if (!ref.current || ref.current.contains(e.target)) {
        return
      }

      handler(e)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener) //  移动端(触摸事件)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

// 如果效果不能显示，换个浏览器试试，我的谷歌浏览器不知道抽什么疯，只能监听事件，却不能移除监听事件
