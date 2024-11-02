import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Custom hook to handle map click and marker drag
const HotelMapComponent = ({ defaultValue }) => {

  return (
    <MapContainer
      center={defaultValue}
      zoom={100}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={defaultValue}></Marker>
    </MapContainer>
  );
};

export default HotelMapComponent;
