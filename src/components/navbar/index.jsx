import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { RecipeContext } from '../../context'

export default function Navbar() {
  const { searchParam, setSearchParam, hanldeSubmit } =
    useContext(RecipeContext)
  return (
    <nav className="flex justify-between items-center py-8 container flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to="/" className=" text-gray-500">
          FoodRecipe
        </NavLink>
      </h2>
      <form onSubmit={hanldeSubmit}>
        <input
          className="bg-white bg-opacity-75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="输入内容"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to="/"
            className="text-lg font-semibold text-gray-800 hover:text-red-500"
          >
            首页
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className="text-lg font-semibold text-gray-800 hover:text-red-500"
          >
            喜欢
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
