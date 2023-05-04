import React from "react";
import MapView, {Marker} from 'react-native-maps';
import { View, StyleSheet } from "react-native";

export default function MapScreen ({route}) {

    return (
     <View style={styles.container}>
        <MapView style={{flex: 1, }}
        initialRegion={{
            latitude: 50.009781,
            longitude: 36.334315,
            longitudeDelta: 0.006, 
            latitudeDelta: 0.001 }}>
        <Marker 
        coordinate={{ latitude: 50.009781,
            longitude: 36.334315}} title="travel photo"/>
        </MapView>
     </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});