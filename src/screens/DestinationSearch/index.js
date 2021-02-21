import React, { useEffect, useState } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles';


const DestinationSearch = (props) => {

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        if (originPlace && destinationPlace) {
            console.warn('Redirect to results');
        }
    }, [originPlace, destinationPlace]);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    onPress={(data, details = null) => {
                        setOriginPlace({ data, details });
                    }}
                    styles={{
                        textInput: styles.textInput
                    }}
                    query={{
                        key: 'AIzaSyABB74exKApcL504-ONhG1Z2fNUDE-3pvk',
                        language: 'en',
                    }}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({ data, details });
                    }}
                    styles={{
                        textInput: styles.textInput
                    }}
                    query={{
                        key: 'AIzaSyABB74exKApcL504-ONhG1Z2fNUDE-3pvk',
                        language: 'en',
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;