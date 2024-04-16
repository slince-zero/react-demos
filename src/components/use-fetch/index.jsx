import { useEffect, useState } from 'react'

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState(null)

  async function fetchData() {
    try {
      setPending(true)
      const response = await fetch(url, { ...options })
      const json = await response.json()
      setData(json)
    } catch (e) {
      setError(`${e},something went wrong`)
    } finally {
      setPending(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { data, pending, error }
}
