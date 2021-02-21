import React from "react"
import styles from "./styles";
import { View, Text, Pressable } from "react-native";
import UberTypeRow from "../UberTypeRow"

import typesData from "../../assets/data/types"

const UberTypes = (props) => {
    const confirm = () => {
        console.warn('confirm');
    }
    return (
        <View>
            {typesData.map(type => <UberTypeRow type={type} />)}

            <Pressable onPress={confirm} style={{ width: '100%', backgroundColor: 'black', padding: 10, margin: 10, alignItems: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    Confirm Uber
                </Text>
            </Pressable>
        </View>
    );
};

export default UberTypes;