/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState([])
  const [err, setErr] = useState(null)
  const [filterUser, setFilterUser] = useState([])

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUser(data)
    } catch (error) {
      console.log(error)
      setErr(error)
    } finally {
      setLoading(false)
    }
  }

  const handleChangeFileterUser = (e) => {
    const inputValue = e.target.value.toLowerCase()

    if (inputValue.length > 0) {
      const filterData =
        user && user.length > 0
          ? user.filter(
              (item) => item.name.toLowerCase().indexOf(inputValue) > -1
            )
          : []
      setFilterUser(filterData)
    } else{
        setFilterUser([])
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return <h1>Loading...</h1>
  if (err) return <h1>{err}</h1>

  return (
    <div>
      <div
        style={{
          border: '1px solid #000',
        }}
      >
        <h3>
          {user.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </h3>
      </div>

      <div
        style={{
          marginTop: '20px',
        }}
      >
        <input
          type="text"
          onChange={handleChangeFileterUser}
          placeholder="请输入一些内容"
        />
        {filterUser &&
          filterUser.length > 0 &&
          filterUser.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SearchAutocomplete
