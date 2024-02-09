import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import "./MapContainer.css";

export default function MapContainer({center}) {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY });
  const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: "25px"
  };

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat:parseInt(center.lat),lng:parseInt(center.lng)}}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}
