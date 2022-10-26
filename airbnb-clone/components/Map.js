import React from 'react'
import ReactMapGL from 'react-map-gl'
import { useState } from 'react'
import { useCallback } from 'react';
import { getCenter } from 'geolib';
import { Marker, Popup } from 'react-map-gl';
import Pin from './Pin';
import { useMemo } from 'react';
import { useEffect } from 'react';

function Map({ searchResults }) {

  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  const center = getCenter(coordinates);
  // console.log(coordinates)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  });

  console.log(selectedLocation, "selectedLocation")
  console.log(coordinates, 'coordinates')

  return <ReactMapGL
    mapStyle="mapbox://styles/tjreinhardt/cl9pz7i0f000715maoqkoe14y"
    mapboxAccessToken='pk.eyJ1IjoidGpyZWluaGFyZHQiLCJhIjoiY2w1dHR3cjZvMm94dDNkcGk4ZndxYWw0NSJ9.RbSlgoxB4Jz_b0m3AK8v7g'
    {...viewport}
    onMove={evt => setViewport(evt.viewport)}
  >
    {searchResults.map((result) => (
      <div key={result.long}>
        <Marker
          latitude={result.lat}
          longitude={result.long}
        // anchor="bottom"
        // offsetLeft={-20}
        // offsetTop={-10}
        >
          <p
            role='img'
            onClick={() => setSelectedLocation(result)}
            className='cursor-pointer text-2xl'
            aria-label="push-pin"
          >
            📍
          </p>
        </Marker>

        {selectedLocation.long !== result.long ? (
          <Popup
            onClose={() => setSelectedLocation({})}
            closeOnClick={true}
            latitude={result.lat}
            longitude={result.long}
          >
            {result.title}
          </Popup>
        ) : (
          false
        )}
      </div>
    ))}

  </ReactMapGL>
}

export default Map
