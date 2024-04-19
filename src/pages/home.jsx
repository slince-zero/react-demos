import { useState, useEffect } from 'react'
import { Circles } from 'react-loader-spinner'
import ProductTile from '../components/product-title'
export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  async function fetchProducts() {
    setLoading(true)
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={'120'}
            width={'120'}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products.map((product) => (
            <ProductTile key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
