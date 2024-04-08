import { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './styles.css'
import PropTypes from 'prop-types'

ImageSlider.propTypes = {
  url: PropTypes.string,
  limit: PropTypes.number,
  page: PropTypes.number,
}

function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(false)
  async function fetchImages(url) {
    try {
      setLoading(true)
      const data = await fetch(`${url}?page=${page}&limit=${limit}`)
      const imageList = await data.json()
      if (imageList) {
        setImages(imageList)
        setLoading(false)
      }
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (url !== '') {
      fetchImages(url)
    }
  }, [url])

  if (loading) {
    return <div>loading.....</div>
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.author}
              className={
                currentSlide === index ? 'current-image' : 'hide-current-image'
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? 'current-indicator'
                    : 'current-indicator inactive-indicator'
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  )
}

export default ImageSlider
