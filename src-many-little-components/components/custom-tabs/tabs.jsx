/* eslint-disable react/prop-types */
import { useState } from 'react'
import style from './tabs.module.css'

function Tabs({ tabsContent }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  function handleOnClick(getCurrentTabIndex) {
    setCurrentTabIndex(getCurrentTabIndex)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.heading}>
        {tabsContent.map((item, index) => (
          <div onClick={() => handleOnClick(index)} key={item.label}>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className={style.content}>
        {tabsContent[currentTabIndex].content}
      </div>
    </div>
  )
}

export default Tabs
