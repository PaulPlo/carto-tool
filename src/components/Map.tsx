import { useRef, useEffect } from 'react'; // Ajout de React et useRef
import { MapContainer, TileLayer, Marker, ZoomControl, Popup } from 'react-leaflet'

import styles from './Map.module.scss'

const Map = ({ data }) => {
    const mapRef = useRef();
    
    const markerIcon = L.icon({
        iconUrl: '/public/map-pin.svg',
        iconSize: [20, 30],
        iconAnchor: [10, 15]
    })
    
    return (
        <MapContainer className={styles.container} attributionControl={false} center={[46.227638, 2.213749]} zoom={6} minZoom={3} maxZoom={15} scrollWheelZoom={false} zoomControl={false} ref={mapRef}>
            <TileLayer
                attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {data.map((item, index: number) => {
                console.log(item)
                return (
                    <Marker icon={markerIcon} eventHandlers={{ click: () => console.log('click'), mouseover: (event) => event.target.openPopup(), mouseout: (event) => event.target.closePopup()}} key={index} position={[item.latlng.lat, item.latlng.lng]}>
                        <Popup>
                            <div>{item.name}</div>
                        </Popup>
                    </Marker>
                )
    
            })}
        </MapContainer>
    );
};

export default Map;

