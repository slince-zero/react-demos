/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import fetchFeatureFlags from '../data'
export const FeatureFlagContext = createContext(null)

export default function FeatureFlagProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [enabledFlags, setEnabledFlags] = useState({})

  async function fetchFlags() {
    setLoading(true)
    try {
      const response = await fetchFeatureFlags()
      setEnabledFlags(response)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFlags()
  }, [])

  return (
    <FeatureFlagContext.Provider value={{ enabledFlags, loading }}>
      {children}
    </FeatureFlagContext.Provider>
  )
}
