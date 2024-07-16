import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Leafletのデフォルトアイコン設定
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

interface MapProps {
    latitude: number;
    longitude: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
    return (
        <MapContainer center={[latitude, longitude]} zoom={15} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html">OpenStreetMap</a> contributors'
            />
            <Marker position={[latitude, longitude]}>
                <Popup>
                    Latitude: {latitude}, Longitude: {longitude}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;