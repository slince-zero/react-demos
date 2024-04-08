import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
function App() {
  return (
    <div className="App">
      {/* 手风琴组件 */}
      {/* <Accordian /> */}

      {/* 随机颜色组件 */}
      {/* <RandomColor /> */}

      {/* 星星评分组件 */}
      {/* <StarRating noOfStars={10}/> */}

      {/* 图片轮播组件 */}
      <ImageSlider />
    </div>
  )
}

export default App
