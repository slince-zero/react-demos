import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './styles.css'

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick(getCurrentIndex) {
    console.log(getCurrentIndex)
  }
  function handleMouseMove(getCurrentIndex) {
    console.log('1111')
    console.log(getCurrentIndex)
  }

  function handleMouseLeave(getCurrentIndex) {
    console.log(getCurrentIndex)
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
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        )
      })}
    </div>
  )
}

export default StarRating
