import { useState, useEffect } from 'react'

/**
 * 这里的css样式使用 CSS Modules 来避免样式冲突，跟使用对象似的
 */
import styles from './styles.module.css'
function LoadMoreData() {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0) // 代表第几页
  const [ifDisableButton, setIfDisableButton] = useState(false)

  async function fetchProduct() {
    try {
      setLoading(true)
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count == 0 ? 0 : count * 20
        }`
      )
      const res = await response.json()

      if (res && res.products && res.products.length) {
        setProducts((prevData) => [...prevData, ...res.products])
        setLoading(false)
      }
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [count])

  useEffect(() => {
    if (count > 0 && products.length) {
      // 滚动到最后一个加载的产品元素
      document.querySelector(`.${styles.product}:last-child`).scrollIntoView({
        behavior: 'smooth',
      })
    }
  }, [products]) // 依赖项是产品数组

  useEffect(() => {
    if (products.length === 60) {
      setIfDisableButton(true)
    }
  }, [products])

  if (loading) {
    return <div>Loading......</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.product_list}>
        {products && products.length
          ? products.map((product) => (
              <div className={styles.product} key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="load-more">
        <button disabled={ifDisableButton} onClick={() => setCount(count + 1)}>加载更多</button>
        {ifDisableButton ? <p>没有更多了</p> : null}
      </div>
    </div>
  )
}

export default LoadMoreData
