/* eslint-disable react/prop-types */
import MenuList from './menu-list'
import { useState } from 'react'

export default function MenuItem({ item }) {
  const [showCurrentChildren, setShowCurrentChildren] = useState({})

  function handleShowCurrentChildren(getCurrentLabel) {
    setShowCurrentChildren({
      ...showCurrentChildren,
      [getCurrentLabel]: !showCurrentChildren[getCurrentLabel],
    })
  }
  //   console.log(showCurrentChildren)
  return (
    <li>
      <div style={{ display: 'flex', gap: '10px' }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => handleShowCurrentChildren(item.label)}
          >
            {showCurrentChildren[item.label] ? '➖' : '➕'}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      showCurrentChildren[item.label] ? (
        <MenuList items={item.children} />
      ) : null}
    </li>
  )
}
