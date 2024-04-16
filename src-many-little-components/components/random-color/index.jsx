import { useEffect, useState } from 'react'
function RandomColor() {
  const [typeColor, setTypeColor] = useState('hex') // 'hex' | 'rgb'
  const [color, setColor] = useState('#000000')

  function handleCreateHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * hex.length)
      hexColor += hex[index]
    }

    setColor(hexColor)
  }
  function handleCreateRgbColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(() => {
    if (typeColor === 'hex') {
      handleCreateHexColor()
    } else {
      handleCreateRgbColor()
    }
  }, [typeColor])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: color,
      }}
    >
      <button onClick={() => setTypeColor('hex')}>生成十六进制颜色</button>
      <button onClick={() => setTypeColor('rgb')}>生成RGB颜色</button>
      <button
        onClick={
          typeColor === 'hex' ? handleCreateHexColor : handleCreateRgbColor
        }
      >
        生成随机颜色
      </button>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '60px',
          marginTop: '50px',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <h3>{typeColor === 'rgb' ? 'RGB COLOR' : 'HEX COLOR'}</h3>
        <h2>{color}</h2>
      </div>
    </div>
  )
}

export default RandomColor
