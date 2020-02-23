import L from 'leaflet';

const icon = i =>
  new L.Icon({
    iconUrl: i,
    iconSize: [36, 36],
    iconAnchor: [17, 36],
    popupAnchor: [0, -36],
    tooltipAnchor: [0, -36],
  });

export default icon;
