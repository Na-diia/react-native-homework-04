import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../auth/LoginScreen";
import RegistrationScreen from "../auth/RegistrationScreen";
import Home from "./Home";
import CreatePostsScreen from "./CreatePostScreen/CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Stack = createStackNavigator();

export default function Navigation () {

    return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Create post" component={CreatePostsScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
    );
};