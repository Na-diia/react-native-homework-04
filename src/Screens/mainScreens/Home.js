import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather} from '@expo/vector-icons'; 
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostScreen/CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const MainTab = createBottomTabNavigator();

export default function Home({navigation}) {
   return(
    <MainTab.Navigator initialRouteName="DefaultScreen" screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 80,
        paddingLeft: 64,
        paddingRight: 64,
        paddingTop: 9,
        paddingBottom: 34,
        borderTopWidth: 1,
        borderTopColor: "rgba(0, 0, 0, 0.2)",
      },
    }} >
    <MainTab.Screen 
    options={{
      tabBarIcon: ({focused, size, color}) => {
       return <Ionicons name="grid-outline" size={24} color="rgba(33, 33, 33, 0.8)" />
      },
      headerStyle : {
        borderTopWidth: 1,
        borderTopColor: "rgba(0, 0, 0, 0.2)",
      },
      headerTitleStyle: {
        fontWeight: '500',
        fontSize: 17,
        color: "#212121",
        marginBottom: 5,
      },
      headerTitleAlign: "center",
      headerRightContainerStyle: { paddingRight: 20, marginBottom: 5},
      headerRight: () => (
       <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Login')}>
        <Feather name="log-out" size={24} color="#BDBDBD" />
       </TouchableOpacity>
      ) 
    }} 
    name="Posts" component={PostsScreen} />

    <MainTab.Screen 
      options={{
        tabBarIcon: () => {
          return <TouchableOpacity activeOpacity={0.5} style={styles.addBtn}  onPress={() => navigation.navigate('Create')}>
           <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        },
        headerShown: false,
        tabBarStyle: { display: "none" },
      }}
    name="Create" component={CreatePostsScreen} />

    <MainTab.Screen 
     options={{
      tabBarIcon: ({focused, size, color}) => {
        return <Feather name="user" size={24} color="#212121cc" />
      },
      headerShown: false,
     }}
    name="ProfileScreen" component={ProfileScreen} />
    </MainTab.Navigator>
   );
};

const styles = StyleSheet.create({
    addBtn: {
      width: 70,
      height: 40,
      backgroundColor: "#FF6C00",
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    addText: {
      color: "#FFFFFF",
      fontSize: 23,
    },
});