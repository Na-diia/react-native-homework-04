import  React, {useEffect} from 'react';
import {useFonts} from 'expo-font';
import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableWithoutFeedback, Keyboard} from 'react-native';

import Navigation from './src/Screens/mainScreens/Navigation';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium' : require('./assets/fonts/Roboto-Medium.ttf')
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
       }})
  }, []);

  return (
    <NavigationContainer>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <Navigation />
    </TouchableWithoutFeedback>
    </NavigationContainer>
  );
};