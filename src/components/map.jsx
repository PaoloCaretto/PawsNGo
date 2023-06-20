import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibGthamRpYyIsImEiOiJjbGlvcTVzM20wYmlmM2VvYzV4aTQyODRuIn0.SqiQVerJTPQ9fKYBFbKwlw';


export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(9.18);
  const [lat, setLat] = useState(45.46);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    // Add geolocate control to the map
    const geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    });

    map.current.addControl(geolocateControl);

    // Update the map with the user's current location
    geolocateControl.on('geolocate', (e) => {
      setLng(e.coords.longitude);
      setLat(e.coords.latitude);
      setZoom(12);
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

