import { useState, useRef } from 'react'
import useOutsideClick from './index'
export default function UseOutsideClickHookTest() {
  const [showContent, setShowContent] = useState(false)
  const ref = useRef(null)
  useOutsideClick(ref, () => setShowContent(false))
  
  return (
    <div>
      {showContent ? (
        // ref={ref}，将ref传递给useOutsideClick，这样在其他地方就可以 是使用 ref.current 来获取当前元素
        <div ref={ref}>
          <h2>This is a random content</h2>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>show content</button>
      )}
    </div>
  )
}
