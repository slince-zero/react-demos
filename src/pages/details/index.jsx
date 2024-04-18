/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { RecipeContext } from '../../context/index'

export default function Details() {
  // debugger
  const {
    recipeDetails,
    setRecipeDetails,
    favoritesList,
    handleAddToFavorite,
  } = useContext(RecipeContext)
  const params = useParams()

  useEffect(() => {
    async function getDetails() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`
      )
      const data = await res.json()

      if (data?.data) {
        setRecipeDetails(data.data.recipe)
      }
    }
    getDetails()
  }, [])
  console.log(recipeDetails)
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetails?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetails?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetails?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetails)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex((item) => item.id === recipeDetails?.id) !==
              -1
              ? 'Remove from favorites'
              : 'Add to favorites'}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetails?.ingredients.map((ingredient) => (
              <li key={ingredient.id}>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
