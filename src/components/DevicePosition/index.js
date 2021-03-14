import React, { useState, useEffect } from 'react'

const DevicePosition = props => {
  const [isAccessGranted, setIsAccessGranted] = useState(false)
  const [[a, b, g], setRotation] = useState([0, 0, 0])

  const requestDeviceMotionEventPermission = async () => {
    const response = await window.DeviceMotionEvent.requestPermission()
    if (response === 'granted') {
      setIsAccessGranted(true)
    }
  }

  useEffect(() => {
    const callback = e => {
      const { alpha, beta, gamma } = e
      setRotation([alpha || 0, beta || 0, gamma || 0])
    }

    window.addEventListener('deviceorientation', callback, true)
    return () => {
      window.removeEventListener('deviceorientation', callback, true)
    }
  }, [isAccessGranted])

  return (
    <>
      <p>Alpha: {a.toFixed(2)}</p>
      <p>Beta: {b.toFixed(2)}</p>
      <p>Gamma: {g.toFixed(2)}</p>
      <button onClick={requestDeviceMotionEventPermission}>click</button>
    </>
  );
}

export default DevicePosition
