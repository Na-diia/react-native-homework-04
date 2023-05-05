import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function CommentsScreen () {
    const navigation = useNavigation();

    return (
     <View style={{justifyContent: 'center', alignItems: 'center'}}>
           <Text >Comments Screen</Text>
     </View>
    );
};