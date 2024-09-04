import { UserLocationContext } from "@/context/UserLocationContext";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React, { useContext, useEffect, useRef } from "react";

function GoogleMapView() {
    const { userLocation } = useContext(UserLocationContext);
    const mapRef = useRef(null);
    const markerRef = useRef(null);
    const containerStyle = {
        width: '100%',
        height: '70vh'
    };
    const coordinate = userLocation || { lat: 14.4064, lng: 120.9405 };

    useEffect(() => {
        if (mapRef.current && userLocation) {
            // Initialize AdvancedMarkerElement
            if (!markerRef.current) {
                markerRef.current = new google.maps.marker.AdvancedMarkerElement({
                    map: mapRef.current,
                    position: coordinate,
                    content: document.createElement('div')
                });

                const iconElement = document.createElement('img');
                iconElement.src = '/user-location.png';
                iconElement.style.width = '50px';
                iconElement.style.height = '50px';

                markerRef.current.content.appendChild(iconElement);
            } else {
                // Update marker position
                markerRef.current.position = coordinate;
            }
        }
    }, [userLocation, coordinate]);

    return (
        <div>
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={coordinate}
                    zoom={13}
                    onLoad={(map) => mapRef.current = map}
                >
                    {/* The marker will be added via the useEffect hook */}
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default GoogleMapView;
