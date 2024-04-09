import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-data'
import TreeView from './components/tree-view'
import menuData from './components/tree-view/data'
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
      {/* <ImageSlider /> */}

      {/* 加载更多数据组件（类似瀑布流） */}
      {/* <LoadMoreData /> */}

      {/* 树形结构组件 */}
      <TreeView menus={menuData} />
    </div>
  )
}

export default App
