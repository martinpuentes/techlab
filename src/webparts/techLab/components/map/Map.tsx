import React, { useState } from 'react';
import { Map, Marker, ZoomControl } from 'pigeon-maps';

const SimpleMap = () => {
   // Coordenadas y datos de los marcadores
   const locations = [
    { name: 'Paraguay', coords: [-23.4425, -58.4438], info: 'Bienvenido a Paraguay!' },
    { name: 'Panamá', coords: [8.537981, -80.782127], info: 'Explora Panamá!' },
    { name: 'Trinidad y Tobago', coords: [10.6918, -61.2225], info: 'Saludos desde Trinidad y Tobago!' }
  ];

  const [hoveredInfo, setHoveredInfo] = useState<string | null>(null); // Almacena el contenido para mostrar

  const mapStyle: React.CSSProperties = {
    height: '45rem',
    width: '70%',
    margin: 'auto',
    border: '20px solid #000000',
    position: 'relative', // Usamos un literal string válido
  };

  const infoBoxStyle: React.CSSProperties = {
    position: 'absolute', // Aseguramos que sea un literal string compatible
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    pointerEvents: 'none', // Para evitar interferir con los eventos del mapa
    zIndex: 10,
  };

  return (
    <div style={mapStyle}>
      <Map center={[8.537981, -80.782127]} zoom={4}>
        {locations.map((location, index) => (
          <Marker
            key={index}
            
            onClick={() => setHoveredInfo(location.info)} // Muestra el contenido al hacer clic
            onMouseOver={() => setHoveredInfo(location.info)} // Muestra el contenido al hacer hover
            onMouseOut={() => setHoveredInfo(null)} // Oculta el contenido al salir del hover
          />
        ))}
        <ZoomControl />
      </Map>
      {hoveredInfo && <div style={infoBoxStyle}>{hoveredInfo}</div>}
    </div>
  );
};


export default SimpleMap;
