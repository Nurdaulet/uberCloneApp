import React from "react";
import { View, Text, Dimensions } from "react-native";

import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';


const HomeScreen = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <HomeMap />
            </View>
            <CovidMessage />
            <HomeSearch />
        </View>
    );
};

export default HomeScreen;