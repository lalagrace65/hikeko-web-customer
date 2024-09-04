// context/GoogleMapsContext.js
import React, { createContext, useContext, useState, useMemo } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

// Create a context
const GoogleMapsContext = createContext();

// Create a provider component
export function GoogleMapsProvider({ children }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
  });

  const [map, setMap] = useState(null);

  const contextValue = useMemo(() => ({
    isLoaded,
    loadError,
    map,
    setMap
  }), [isLoaded, loadError, map]);

  return (
    <GoogleMapsContext.Provider value={contextValue}>
      {children}
    </GoogleMapsContext.Provider>
  );
}

// Create a custom hook to use the Google Maps context
export function useGoogleMaps() {
  return useContext(GoogleMapsContext);
}
