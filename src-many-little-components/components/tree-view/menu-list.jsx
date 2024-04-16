/* eslint-disable react/prop-types */

import MenuItem from './menu-item'

export default function MenuList({ items = [] }) {
  return (
    <ul>
      {items && items.length
        ? items.map((item, index) => <MenuItem key={index} item={item} />)
        : null}
    </ul>
  )
}
