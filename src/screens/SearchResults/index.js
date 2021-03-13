import React, { useState } from "react";

import { Alert, View } from "react-native";
import RouteMap from "../../components/RouteMap";
import UberTypes from "../../components/UberTypes";
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createOrder } from '../../graphql/mutations';
import { useRoute, useNavigation } from '@react-navigation/native';


const SearchResults = (props) => {
    const typeState = useState(null);
    const navigation = useNavigation();

    const route = useRoute(props);

    const { originPlace, destinationPlace } = route.params;
    const onSubmit = async () => {
        const [type] = typeState;
        if (!type) return;

        //submit to server

        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const date = new Date();
            const input = {
                createdAt: date.toISOString(),
                type,
                originLatitude: originPlace.details.geometry.location.lat,
                originLongitude: originPlace.details.geometry.location.lng,

                destLatitude: destinationPlace.details.geometry.location.lat,
                destLongitude: destinationPlace.details.geometry.location.lng,

                userId: userInfo.attributes.sub,
                carId: "1",
            }
            const response = await API.graphql(
                graphqlOperation(createOrder, {
                    input: input
                })
            );
            console.log(response);
            Alert.alert("YEsss", "Your order has been submitted!", [{
                text: "Go home",
                onPress: () => {
                    navigation.navigate("Home");
                }
            }])

        } catch (e) {
            console.error(e);
        }
    };


    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <RouteMap origin={originPlace} destination={destinationPlace} />
            </View>

            <UberTypes typeState={typeState} onSubmit={onSubmit} />

        </View>
    );
};

export default SearchResults;