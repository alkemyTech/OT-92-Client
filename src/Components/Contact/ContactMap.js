import { Popup, MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './contactMap.css';
import L from 'leaflet';

const ContactMap = ({ iconLink }) => {
  const position = [-34.55881726737178, -58.47476996280374];

  const markerIcon = L.icon({
    //receives a link for the icon as a prop
    iconUrl: iconLink
      ? iconLink
      : 'https://www.agroavisos.net/wp-content/uploads/2017/04/map-marker-icon.png',
    iconSize: [40, 40],
    iconAnchor: [12, 41],
    popupAnchor: [8, -40],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position} icon={markerIcon}>
        <Popup>
          <span>
            <strong>SomosMas</strong>
          </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ContactMap;
