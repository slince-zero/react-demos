import { useEffect, useState } from 'react'
import UserCard from './userCard'
import style from './styles.module.css'

const GithubProfileFinder = () => {
  const [username, setUsername] = useState('slince-zero')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = () => {
    setLoading(true)
    fetchData()
  }

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      const data = await response.json()
      if (data.message === 'Not Found') {
        setError('User not found')
        setUserData(null)
      } else {
        setUserData(data)
        console.log(data);
      }
    } catch (error) {
      setError('No Data Found')
    } finally {
      setLoading(false)
    }
  }

  const handleExit = (e) => {
    e.preventDefault()
    // Refresh state here
    setUsername('')
    setUserData(null)
    setError(null)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error)
    return (
      <div>
        {error}{' '}
        <>
          <button onClick={handleExit}>exit</button>
        </>
      </div>
    )

  return (
    <div className={style.container}>
      <div className={style.warpper}>
        <div className={style.in_btn}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Github Username"
          />
          <button style={{ margin: '0 5px' }} onClick={handleSubmit}>
            Search
          </button>
        </div>

        {userData && <UserCard userData={userData} />}
      </div>
    </div>
  )
}

export default GithubProfileFinder
