/* eslint-disable react/prop-types */
import MenuList from './menu-list'

function TreeView({ menus = [] }) {
  return (
    <div>
      <MenuList items={menus} />
    </div>
  )
}

export default TreeView
