import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'


const Geolocation = () => {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  const mapStyles = {
    height: "50vh",
    width: "100%"
  }

  const [ currentPosition, setCurrentPosition ] = useState({});

  const onSuccess = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  }

  const onError = positionError => {
    alert(positionError.message)
  }

  const positionOptions = { maximumAge: 300000, timeout: 5000 };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, positionOptions)
  })

  const poi = [
    {
      lat: 49.79887531311079,
      lng:  19.095260434813856
    },
    {
      lat: 49.826737737837725,
      lng: 19.036953986008054
    },
    {
      lat: 49.85197705424048,
      lng: 19.043222466938218
    }
  ]

  return (
    <>
      <LoadScript
        googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={currentPosition}
        >
          {poi.map(singlePoi => (
            <Marker
              position={singlePoi}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </>
  )
}

export default Geolocation
