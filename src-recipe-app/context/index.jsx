/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const RecipeContext = createContext()

export default function RecipeProvider({ children }) {
  const [searchParam, setSearchParam] = useState('')
  const [loading, setLoading] = useState(false)
  const [recipeList, setRecipeList] = useState([])
  const [recipeDetails, setRecipeDetails] = useState(null)
  const [favoritesList, setFavoritesList] = useState([])
  async function hanldeSubmit(e) {
    e.preventDefault()
    try {
      setLoading(true)
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      )

      const data = await res.json()
      console.log(data)
      if (data?.data?.recipes) setRecipeList(data.data.recipes)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
      setSearchParam('')
    }
  }

  function handleAddToFavorite(getCurrentItem) {
    let copyFavoritesList = [...favoritesList]
    const index = copyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    )

    if (index === -1) {
      copyFavoritesList.push(getCurrentItem)
    } else {
      copyFavoritesList = copyFavoritesList.filter(
        (item) => item.id !== getCurrentItem.id
      )
    }

    setFavoritesList(copyFavoritesList)
  }

  return (
    <RecipeContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        hanldeSubmit,
        recipeDetails,
        setRecipeDetails,
        favoritesList,
        setFavoritesList,
        handleAddToFavorite,
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}
