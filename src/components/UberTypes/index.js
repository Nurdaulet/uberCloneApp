import React from "react"
import styles from "./styles";
import { View, Text, Pressable, Dimensions } from "react-native";
import UberTypeRow from "../UberTypeRow"

import typesData from "../../assets/data/types"

const UberTypes = ({ typeState, onSubmit }) => {
    const [selectedType, setSelectedType] = typeState;

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 5 }}>
                {typesData.map(type => <UberTypeRow type={type} key={type.id} isSelected={type.type === selectedType} onPress={() => setSelectedType(type.type)} />)}
            </View>
            <View style={{ flex: 1 }}>
                <Pressable onPress={onSubmit} style={{ backgroundColor: 'black', padding: 10, margin: 10, alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                        Confirm Uber
                </Text>
                </Pressable>
            </View>

        </View>
    );
};

export default UberTypes;