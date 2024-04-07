// 单选
// 多选
import { useState } from 'react'
import accordionData from './data'
import './styles.css'

function Accordian() {
  const [selected, setSelected] = useState(null)
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false)
  const [mutiple, setMutiple] = useState([])

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  function handleMultipleSelection(getCurrentId) {
    let copyMutiple = [...mutiple]

    const index = copyMutiple.indexOf(getCurrentId)
    if (index === -1) {
      //说明当前点的id没有进入到mutiple中
      copyMutiple.push(getCurrentId)
    } else {
      // 说明当前点的id已经进入到mutiple中，再点一次就要从里面删除
      copyMutiple.splice(index, 1)
    }
    setMutiple(copyMutiple)
  }
  console.log(selected, mutiple)

  return (
    <div className="warpper">
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        多选开关按钮 - {enableMultipleSelection ? '打开' : '关闭'}
      </button>
      <div className="accordian">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((items) => (
            <div className="item" key={items.id}>
              <div
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelection(items.id)
                    : () => handleSingleSelection(items.id)
                }
                className="title"
              >
                <h3>{items.question}</h3>
                <span>+</span>
              </div>
              {enableMultipleSelection
                ? mutiple.indexOf(items.id) !== -1 && (
                    <div className="content">{items.answer}</div>
                  )
                : selected === items.id && (
                    <div className="content">{items.answer}</div>
                  )}
              {/* {selected === items.id ? (
                <div className="content">{items.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>DATA NOT FOUND</div>
        )}
      </div>
    </div>
  )
}

export default Accordian
