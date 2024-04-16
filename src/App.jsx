/* eslint-disable no-unused-vars */
import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-data'
import TreeView from './components/tree-view'
import menuData from './components/tree-view/data'
import QRCodeGenerator from './components/qr-code'
import LightDarkMode from './components/light-dark-mode'
import ScrollIndicator from './components/scroll-indicator'
import TabsTest from './components/custom-tabs/tab-test'
import CustomModalPopup from './components/custom-modal-popup'
import GithubProfileFinder from './components/github-profile-finder'
import SearchAutocomplete from './components/search-autocomplete'
import BoardGame from './components/square-game'
import FeatureFlag from './components/feature-flag'
import FeatureFlagProvider from './components/feature-flag/context'
import UseFetchHookTest from './components/use-fetch/test'
import UseOutsideClickHookTest from './components/use-outside-click/test'
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
      {/* <ImageSlider  url={'https://picsum.photos/v2/list'} limit={5} page={1}/> */}

      {/* 加载更多数据组件（类似瀑布流） */}
      {/* <LoadMoreData /> */}

      {/* 树形结构组件 */}
      {/* <TreeView menus={menuData} /> */}

      {/* 二维码生成组件 */}
      {/* <QRCodeGenerator/> */}

      {/* 切换白天黑夜主题样式 */}
      {/* <LightDarkMode /> */}

      {/* 滚动条组件 */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}

      {/* Tabs组件 */}
      {/* <TabsTest /> */}

      {/* 自定义弹窗组件 */}
      {/* <CustomModalPopup /> */}

      {/* Github用户搜索组件 */}
      {/* <GithubProfileFinder /> */}

      {/* 自动搜索组件 */}
      {/* <SearchAutocomplete /> */}

      {/* 井字棋游戏 */}
      {/* <BoardGame /> */}

      {/* feature 组件 */}
      {/* <FeatureFlagProvider>
        <FeatureFlag />
      </FeatureFlagProvider> */}

      {/* 自定义钩子组件 */}
      {/* <UseFetchHookTest /> */}
      <UseOutsideClickHookTest />
    </div>
  )
}

export default App
