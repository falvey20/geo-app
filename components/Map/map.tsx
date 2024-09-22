// Use client directive

'use client';

// Map.tsx
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapCoordinates } from '../MapCoordinates/MapCoordinates';
import MapStylePicker from '../MapStylePicker/MapStylePicker';

import './Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';

// Set your Mapbox access token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'your_mapbox_token';

const mapTypes = [
  { name: 'Streets', url: 'mapbox://styles/mapbox/streets-v12' },
  { name: 'Outdoors', url: 'mapbox://styles/mapbox/outdoors-v12' },
  { name: 'Light', url: 'mapbox://styles/mapbox/light-v11' },
  { name: 'Dark', url: 'mapbox://styles/mapbox/dark-v11' },
  { name: 'Satellite', url: 'mapbox://styles/mapbox/satellite-v9' },
  { name: 'Satellite Streets', url: 'mapbox://styles/mapbox/satellite-streets-v12' },
  { name: 'Navigation Day', url: 'mapbox://styles/mapbox/navigation-day-v1' },
  { name: 'Navigation Night', url: 'mapbox://styles/mapbox/navigation-night-v1' },
];

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [cursorCoordinates, setCursorCoordinates] = useState<{ lng: string; lat: string }>({
    lng: '0',
    lat: '0',
  });
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [currentStyle, setCurrentStyle] = useState(mapTypes[0].url); // Default style

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize the map only if it hasn't been initialized yet
    if (!map) {
      const mapboxMap = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: currentStyle,
        center: [-9, 38],
        zoom: 2,
        attributionControl: false,
      });

      // Manually add the attribution control in a different position (top-right)
      mapboxMap.addControl(new mapboxgl.AttributionControl({ compact: true }));

      const toDMS = (degrees: number, isLongitude: boolean) => {
        const direction = isLongitude ? (degrees >= 0 ? 'E' : 'W') : degrees >= 0 ? 'N' : 'S';
        degrees = Math.abs(degrees);
        const d = Math.floor(degrees);
        const m = Math.floor((degrees - d) * 60);
        const s = ((degrees - d - m / 60) * 3600).toFixed(2);
        return `${d}°${m}′${s}″${direction}`;
      };

      mapboxMap.on('mousemove', (e) => {
        const lngDMS = toDMS(e.lngLat.lng, true);
        const latDMS = toDMS(e.lngLat.lat, false);
        setCursorCoordinates({ lng: lngDMS, lat: latDMS });
      });

      setMap(mapboxMap); // Store the map instance
    } else {
      // If map is already initialized, just change the style
      map.setStyle(currentStyle);
    }
  }, [map, currentStyle]); // Re-run effect when style changes

  const switchStyle = (styleUrl: string) => {
    setCurrentStyle(styleUrl); // Update the current style in state
  };

  return (
    <>
      <div className="map-container" ref={mapContainerRef} />
      <MapCoordinates coordinates={cursorCoordinates} />
      <MapStylePicker styles={mapTypes} onSwitch={switchStyle} />
    </>
  );
};

export default Map;
