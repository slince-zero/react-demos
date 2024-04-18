/* eslint-disable react/jsx-key */
import { useContext } from 'react'
import { RecipeContext } from '../../context/index'
import RecipeItem from '../../components/receipe-list'
export default function Favorites() {
  const { favoritesList } = useContext(RecipeContext)
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            No favorites yet
          </p>
        </div>
      )}
    </div>
  )
}
