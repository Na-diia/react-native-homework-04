import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';

import DefaultScreenPost from "../nestedScreens/DefaultScreenPost";
import MapScreen from "../nestedScreens/MapScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen";

const NestedScreen = createStackNavigator();

export default function PostsScreen() {
  const navigation = useNavigation();

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