import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Custom hook to handle map click and marker drag
const MapComponent = ({ onLocationSelect, defaultValue }) => {
  const [position, setPosition] = useState([
    41.37889567357105, 60.362177080014575,
  ]); // Default position (San Francisco)

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        onLocationSelect(e.latlng);
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={position}
      zoom={100}
      style={{ height: "80%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}></Marker>
      <MapClickHandler />
    </MapContainer>
  );
};

export default MapComponent;
