import React, { useState } from 'react'
import QrReader from 'react-qr-reader'

const Camera = props => {
  const [result, setResult] = useState(null)

  const handleScan = data => {
    if (data) {
      setResult(data)
    }
  }
  const handleError = err => {
    console.error(err)
  }

  const handleClick = () => {
    navigator.mediaDevices.getUserMedia({
      video: true
     })
  }

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>{result}</p>

      <button onClick={handleClick}>show</button>
    </div>
  )
}

export default Camera
