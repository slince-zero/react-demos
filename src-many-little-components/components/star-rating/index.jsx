import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './styles.css'

import PropType from 'prop-types'

StarRating.propTypes = {
  noOfStars: PropType.number,
}
/**
 * 这个组件在我的谷歌浏览器上显示有点问题，但是在 Edge 上没有问题，就很奇怪
 */
function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex)
  }
  function handleMouseMove(getCurrentIndex) {
    console.log('111')
    setHover(getCurrentIndex)
  }

  function handleMouseLeave() {
    setHover(rating)
  }

  return (
    <div className="star-rating">
      {/* 下划线 _ 是一种常见的约定，用来表示这个参数是存在的但是在函数体内不会被用到。 */}
      {[...Array(noOfStars)].map((_, index) => {
        index += 1
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        )
      })}
    </div>
  )
}

export default StarRating
