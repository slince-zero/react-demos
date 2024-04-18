import { createContext, useState } from 'react'

export const RecipeContext = createContext()

export default function RecipeProvider({ children }) {
  const [searchParam, setSearchParam] = useState('')
  const [loading, setLoading] = useState(false)
  const [recipeList, setRecipeList] = useState([])

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

  return (
    <RecipeContext.Provider
      value={{ searchParam, loading, recipeList, setSearchParam, hanldeSubmit }}
    >
      {children}
    </RecipeContext.Provider>
  )
}
