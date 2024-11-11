import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Настраиваем пути к изображениям маркера
delete L.Icon.Default.prototype._getIconUrl;


// Устанавливаем пути к изображениям иконки
L.Icon.Default.mergeOptions({
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});


const MapComponent = ({ onLocationSelect, defaultValue }) => {
  const [position, setPosition] = useState([
    41.37889567357105, 60.362177080014575,
  ]); // Позиция по умолчанию

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
      zoom={12} // Уменьшил масштаб для улучшения отображения карты
      style={{ height: "80%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}></Marker>
      <MapClickHandler />
    </MapContainer>
  );
};

export default MapComponent;
