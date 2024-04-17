export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8 container flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">FoodRecipe</h2>
      <input
        className="bg-white bg-opacity-75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        type="text"
        name="search"
        placeholder="输入内容"
      />
    </nav>
  )
}