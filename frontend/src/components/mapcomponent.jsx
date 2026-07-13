import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// FIX: Leaflet marker icons often break when compiled by Vite/Webpack in React.
// This snippet resets the default marker icon paths so they display correctly.
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

export default function TripMap({ coordinates, initialZoom = 13, places = [] }) {
  // Default to London if no coordinates are provided yet by your AI
  const mapCenter = coordinates || [51.505, -0.09];

  return (
    <div className='w-1/3 h-100 rounded-xl overflow-hidden '>
      <MapContainer 
        center={mapCenter} 
        zoom={initialZoom} 
        className='w-full h-full'
      >
        {/* Free OpenStreetMap tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Dynamically render markers for the AI's suggested places */}
        {places.map((place, index) => (
          <Marker key={index} position={place.position}>
            <Popup>
              <strong>{place.name}</strong> <br />
              {place.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}