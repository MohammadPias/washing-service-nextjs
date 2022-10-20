import Image from 'next/image';
import React from 'react';
import Map, { Marker } from 'react-map-gl';
import pin from "../../images/pin.png"

const MapBox = () => {
    const styles = {
        width: "100%",
        height: "500px"
    }
    return (
        <Map
            initialViewState={{
                longitude: -100.000000,
                latitude: 31.000000,
                zoom: 4
            }}
            style={styles}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken="pk.eyJ1Ijoibm1waWFzIiwiYSI6ImNsNXQ4NTczczJvdzczaXE5b2FkbTNvNHIifQ.LoBl0TpcVD_1PoOsUGRMEg"
        >
            <Marker longitude={-100.000000} latitude={31.000000} anchor="bottom" >
                <Image src={pin} alt="pin" />
            </Marker>
        </Map>
    );
};

export default MapBox;