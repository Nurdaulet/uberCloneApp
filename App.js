/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import {
  StatusBar, PermissionsAndroid, Platform
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Router from './src/navigation/Root';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from "aws-amplify";
import awsExports from "./src/aws-exports";
Amplify.configure(awsExports);


navigator.geolocation = require('@react-native-community/geolocation');

const App: () => React$Node = () => {

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber App Camera Permission",
          message:
            "Uber App needs access to your location " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    if (Platform.OS == 'android') {
      androidPermission();
    } else {
      Geolocation.requestAuthorization();
    }
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />

    </>
  );
};


export default withAuthenticator(App);
