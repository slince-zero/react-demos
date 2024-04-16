import useFetch from './index'

export default function UseFetchHookTest() {
  const { data, pending, error } = useFetch(
    'https://dummyjson.com/products',
    {}
  )
  console.log(data, pending, error)

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending && <h2>Loading...</h2>}
      {data && data.products.map((item) => <p style={{margin:'10px'}} key={item.id}>{item.title}</p>)}
      {error && <h2>{error}</h2>}
    </div>
  )
}
