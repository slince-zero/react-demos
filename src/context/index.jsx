import { createContext, useState } from 'react'

export const RecipeContext = createContext()

export default function RecipeProvider({ children }) {
  const [searchParam, setSearchParam] = useState('')

  return (
    <RecipeContext.Provider value={{ searchParam, setSearchParam }}>
      {children}
    </RecipeContext.Provider>
  )
}
cc