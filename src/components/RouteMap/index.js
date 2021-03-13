import React from "react";
import { View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Marker } from 'react-native-maps';




const RouteMap = ({ origin, destination }) => {

    const originLoc = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng
    };

    const destinationLoc = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng
    };

    return (
        <MapView
            style={{ height: '100%', width: '100%' }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <MapViewDirections
                origin={originLoc}
                destination={destinationLoc}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="black"
            />
            <Marker
                coordinate={originLoc}
                title={'Origin'}
            />
            <Marker
                coordinate={destinationLoc}
                title={'Destination'}
            />

        </MapView>
    );
};

export default RouteMap;