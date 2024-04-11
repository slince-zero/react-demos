import { useState, useEffect } from 'react'
import style from './styles.module.css'

function ScrollIndicator({ url }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  async function fetchData(getUrl) {
    try {
      setLoading(true)
      const response = await fetch(getUrl)
      const res = await response.json()

      if (res && res.products && res.products.length > 0) {
        setData(res.products)
        setLoading(false)
      }
    } catch (e) {
      console.log(e)
    }
  }
  //   console.log(data, scrollPercentage)

  useEffect(() => {
    fetchData(url)
  }, [])

  function handleScrollPercentage() {
    // 获取当前窗口滚动的垂直距离，表示网页顶部到当前位置已经滚动的像素
    const howMuchScrolled = window.scrollY

    // 获取整个文档可以滚动的总高度，即整个页面的高度 - 可视窗口的高度
    const height = document.body.scrollHeight - window.innerHeight

    setScrollPercentage((howMuchScrolled / height) * 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage)

    return () => {
      window.removeEventListener('scroll', handleScrollPercentage)
    }
  }, [])

  if (loading) {
    return <h1>加载中。。。。</h1>
  }

  return (
    <div className={style.container}>
      <div
        className={style.progress}
        style={{ width: scrollPercentage + '%' }}
      ></div>
      <img
        src="./../../../public/miku.gif"
        alt="miku"
        style={{
          position: 'fixed',
          width:'70px',
          height:'70px',
          left: `calc(${scrollPercentage}% - 0px)`,
          bottom: 0,
        }}
      />
      <h2>滚动条组件</h2>
      {data && data.length > 0
        ? data.map((item) => <p key={item.id}>{item.title}</p>)
        : null}
    </div>
  )
}

export default ScrollIndicator
