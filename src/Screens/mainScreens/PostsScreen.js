import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DefaultScreenPost from "../nestedScreens/DefaultScreenPost";
import MapScreen from "../nestedScreens/MapScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen";

const NestedScreen = createNativeStackNavigator();

export default function PostsScreen({navigation}) {

   return (
    <NestedScreen.Navigator initialRouteName="DefaultScreen" screenOptions={{headerShown: false}}>
      <NestedScreen.Screen name="DefaultScreen" component={DefaultScreenPost}/>
      <NestedScreen.Screen 
      options={{
        headerShown: true,
        headerTitleAlign: 'center',
      }} name="Map" component={MapScreen}/>
      <NestedScreen.Screen 
      options={{
        headerShown: true,
        headerTitleAlign: 'center',
      }}
        name="Comments" component={CommentsScreen}/>
    </NestedScreen.Navigator>
   )
};