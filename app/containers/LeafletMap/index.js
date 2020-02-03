import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const coordinates = [47.5, 9.7];

export default function LeafletMap() {
  console.log(Marker);
  return (
      <Map center={[47.3, 9.9]} zoom={9} style={{height: '500px'}}>
        <TileLayer 
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
          <Marker position={coordinates}>
          </Marker>
      </Map>
  );
}