import React, { useEffect, useState } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import PlaceRow from '../DestinationSearch/placerow';

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = (props) => {

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    const navigation = useNavigation();

    const checkNavigation = () => {
        if (originPlace && destinationPlace) {
            navigation.navigate('SearchResults', {
                originPlace, destinationPlace
            });
        }
    }

    useEffect(() => {
        checkNavigation();
    }, [originPlace, destinationPlace]);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    onPress={(data, details = null) => {
                        setOriginPlace({ data, details });
                    }}
                    suppressDefaultStyles
                    fetchDetails
                    styles={{
                        textInput: styles.textInput,
                        container: styles.autocompleteContainer,
                        listView: styles.listView,
                        separator: styles.separator,
                    }}
                    currentLocation={true}
                    currentLocationLabel='Current location'
                    query={{
                        key: 'AIzaSyBybtviAvr8IZALxF0-dyZLwH8MzU0qcmc',
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}
                    renderDescription={(data) => data.description || data.vicinity}
                    predefinedPlaces={[homePlace, workPlace]}
                    enablePoweredByContainer={false}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({ data, details });
                    }}
                    suppressDefaultStyles
                    fetchDetails
                    styles={{
                        textInput: styles.textInput,
                        container: { ...styles.autocompleteContainer, top: 55 },
                        separator: styles.separator,
                    }}
                    query={{
                        key: 'AIzaSyBybtviAvr8IZALxF0-dyZLwH8MzU0qcmc',
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}
                    enablePoweredByContainer={false}
                />
                <View style={styles.circle} />

                <View style={styles.line} />

                <View style={styles.square} />
            </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;