import { useState, useEffect } from 'react'
import Search from '../search'

export default function Weather() {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [weatherData, setWeatherData] = useState(null)

  async function fetchData(param) {
    try {
      /**
       * 这里需要多有一个请求API，原因是高德地图查询天气是通过adcode来指代城市
       * 从而再调查询天气的API
       */
      // 获取要查询城市的adcode
      let adcode = ''
      const res = await fetch(
        `https://restapi.amap.com/v3/geocode/geo?address=${param}&key=6a2697f791acf60155d19f0b6e3b383d`
      )
      if (res.ok) {
        const data = await res.json()
        console.log(data.geocodes[0].adcode, '11')
        adcode = data.geocodes[0].adcode
      }
      console.log(adcode, '11')
      setLoading(true)
      const response = await fetch(
        `https://restapi.amap.com/v3/weather/weatherInfo?city=${adcode}&key=6a2697f791acf60155d19f0b6e3b383d`
      )

      const data = await response.json()
      console.log(data, '22')
      if (data) {
        setWeatherData(data)
      }
    } catch (e) {
    } finally {
      setLoading(false)
    }
  }

  async function handleSearch() {
    fetchData(search)
  }

  useEffect(() => {})

  if (loading) return <h1>Loading...</h1>

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <h1>Weather</h1>
    </div>
  )
}
