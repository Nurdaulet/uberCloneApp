import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { API, graphqlOperation } from 'aws-amplify';
import { listCars } from "../../graphql/queries";

//import cars from '../../assets/data/cars'

const HomeMap = (props) => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await API.graphql(
                    graphqlOperation(listCars)
                );

                setCars(response.data.listCars.items);
            } catch (e) {
                console.error(e);
            }
        };

        fetchCars();
    }, [])

    const getImage = (type) => {
        if (type === 'UberX') {
            return require('../../assets/images/top-UberX.png');
        }

        if (type === 'Comfort') {
            return require('../../assets/images/top-Comfort.png');
        }
        return require('../../assets/images/top-UberXL.png');
    };

    return (
        <MapView
            style={{ height: '100%', width: '100%' }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            {cars.map((car) => (
                <Marker key={car.id} coordinate={{ latitude: car.latitude, longitude: car.longitude }}>
                    <Image style={{ width: 70, height: 70, resizeMode: 'contain', transform: [{ rotate: `${car.heading}deg` }] }} source={getImage(car.type)} />
                </Marker>
            ))}


        </MapView>
    );
};

export default HomeMap;