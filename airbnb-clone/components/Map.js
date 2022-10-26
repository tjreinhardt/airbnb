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

  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  const center = getCenter(coordinates);
  console.log(coordinates)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  });

  // const pins = useMemo(
  //   () =>
  //     searchResults.map((result) => (
  //       <Marker
  //         key={result.long}
  //         longitude={result.long}
  //         latitude={result.lat}
  //         anchor="bottom"
  //         onClick={e => {
  //           e.originalEvent.stopPropagation();
  //           setPopupInfo({ ...result })
  //         }}>
  //         <Pin />
  //       </Marker>
  //     )),
  //   [searchResults]
  // )


  // const createFeatureCollection = (searchResults) => {
  //   return {
  //     "type": "FeatureCollection",
  //     "features": searchResults.map((result) => {
  //       return {
  //         "type": "Feature",
  //         "geometry": {
  //           "type": "Point",
  //           "coordinates": [result.long, result.lat]
  //         }
  //       }
  //     })
  //   }
  // }

  // useEffect(() => {
  //   createFeatureCollection(searchResults)
  // }, [searchResults])



  // console.log(searchResults, "searchResults")

  // Transform search results object into
  // { latitude: 52.516272, longitude: 13.132342} object






  // const handleViewportChange = useCallback(
  //   (viewport) => setViewport(viewport),
  //   []
  // );

  return <ReactMapGL
    mapStyle="mapbox://styles/tjreinhardt/cl9pz7i0f000715maoqkoe14y"
    mapboxAccessToken='pk.eyJ1IjoidGpyZWluaGFyZHQiLCJhIjoiY2w1dHR3cjZvMm94dDNkcGk4ZndxYWw0NSJ9.RbSlgoxB4Jz_b0m3AK8v7g'
    {...viewport}
    onMove={evt => setViewport(evt.viewport)}
  >
    {coordinates.map((result) => (
      <div key={result.longitude}>
        <Marker
          latitude={result.latitude}
          longitude={result.longitude}
        // anchor="bottom"
        // offsetLeft={-20}
        // offsetTop={-10}
        >
          <p
            role={'img'}
            className='cursor-pointer text-2xl animate-bounce'>📍</p>
        </Marker>
      </div>
    ))}

    <Marker longitude={-122.4376} latitude={37.7577}>
      <div style={{ color: 'white' }}>You are here</div>
    </Marker>
    {/* {pins} */}

  </ReactMapGL>
}

export default Map
