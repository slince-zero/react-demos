import { useState } from 'react'
import QRCode from 'react-qr-code'

function QRCodeGenerator() {
  const [value, setValue] = useState('')
  const [qrCode, setQrCode] = useState('https://github.com/slince-zero')

  function handleGenerate() {
    if (!value) {
      alert('请输入内容')
    }
    if (value === qrCode) {
      alert('不要重复输入相同的数据')
      setValue('')
    } else {
      setQrCode(value)
      setValue('')
    }
  }

  return (
    <>
      <h2>二维码生成</h2>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder="请输入内容"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{margin:'10px 0'}}
        />{' '}
        <button
          disabled={value && !value.trim() ? true : false}
          onClick={handleGenerate}
        >
          生成
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} />
      </div>
    </>
  )
}

export default QRCodeGenerator
