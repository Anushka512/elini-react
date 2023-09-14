import React from 'react';
// import { MapContainer, TileLayer } from 'react-leaflet';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import 'leaflet/dist/leaflet.css';
import './Map.scss';

const Map = () => {
    const apiKey = 'AIzaSyC8KmKvZlaTA5KxLaN_RA9J3RZCrY674rA';

    const center = { lat: 20.5937, lng: 78.9629 };

    return (
        <div className="map-container">
            {/* <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ width: '100%', height: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer> */}
            <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={center}
                    zoom={5}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;
