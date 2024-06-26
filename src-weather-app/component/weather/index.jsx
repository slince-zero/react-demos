import { useState, useEffect } from 'react'
import Search from '../search'

export default function Weather() {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
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
        adcode = data.geocodes[0].adcode
      }
      setLoading(true)
      const response = await fetch(
        `https://restapi.amap.com/v3/weather/weatherInfo?city=${adcode}&key=6a2697f791acf60155d19f0b6e3b383d`
      )

      const data = await response.json()
      if (data) {
        setWeatherData(data.lives[0])
      }
    } catch (e) {
      console.log(e)
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  async function handleSearch() {
    fetchData(search)
  }

  useEffect(() => {
    fetchData('北京')
  }, [])

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>{error}</h1>

  return (
    <div>
      <h1>Weather</h1>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {weatherData && (
        <div className="city-name">
          <h2>{weatherData.city}</h2>
          <div className='weather-info'>
            <p>天气：{weatherData.weather}</p>
            <p>温度：{weatherData.temperature}℃</p>
            <p>湿度：{weatherData.humidity}%</p>
            <p>风向：{weatherData.winddirection}</p>
            <p>风力：{weatherData.windpower}级</p>
            <p>时间：{weatherData.reporttime}</p>
          </div>
        </div>
      )}
    </div>
  )
}
