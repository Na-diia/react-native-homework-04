import React, {useState, useEffect, useRef} from "react";
import { useIsFocused } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Location from 'expo-location';
import { Feather, AntDesign  } from '@expo/vector-icons';
import { Camera, CameraType } from "expo-camera";
import { View, Text, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard} from "react-native";
import {deleteBtn, addText, addBtnActive, addBtn, input, addPostForm, cameraWrap, underText, image, contentImg, container} from './CreateStyle';

const CreatePost = ({navigation}) => {
    const [photo, setPhoto] = useState(null);
    const [location, setLocation] = useState("");
    const [title, setTitle] = useState("");
    const [isKeyboard, setIsKeyboard] = useState(false);

    const cameraRef= useRef();
    const isFocused = useIsFocused();

useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissions();
      setHasPermission(status === 'granted');
    })();

    const getLocation = async () => {
      try {
          const { status } = await Camera.requestCameraPermissionsAsync();
          if(!status === 'granted'){
            console.lod('Permission was not denied');
          };

          const location = await Location.getCurrentPositionAsync({});
          const coordinates = {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
          };
      } catch (error) {
          console.log('error: ', error.message);
      }
  };

  getLocation();
}, []);

  const activeBtn = Boolean(photo && title && location);

  const takePhoto = async () => {
    if(photo) return;
    const photo = await cameraRef.current.takePictureAsync();
    setPhoto(photo.uri);
    console.log("photo", photo);
  };

  const sendPost = () => {
    if(!photo || !title || !location) {
      alert('Enter all data, please!');
      return;
    }
     navigation.navigate('DefaultScreen', {photo});
  };

  const deletePhoto = () => {
    setPhoto("");
    setTitle("");
    setLocation("");
  };

  return (
        <TouchableWithoutFeedback
        onPress={() => {
         Keyboard.dismiss(); 
         setIsKeyboard(false);
        }}>
        <View style={container}>
    {isFocused  && (<Camera ref={cameraRef} 
        style={{...contentImg, 
        marginTop: isKeyboard ? 0 : 32, }} 
        type={CameraType.back}>
      {photo && (
         <View 
         style={image} >
            <Image source={{uri: photo}}
            style={{ width: 313, height: isKeyboard ? 100 : 155, resizeMode: "cover"}}/>
         </View>)}
        <TouchableOpacity activeOpacity={0.5} style={cameraWrap} onPress={takePhoto}>
        <AntDesign name="camera" size={24} color="#BDBDBD" />
       </TouchableOpacity>
    </Camera>)}
     <Text style={underText}>{photo ? 'Edit photo' : 'Upload a photo, please!'}</Text>
      <View style={addPostForm}>
            <TextInput placeholder="Title..." 
            value={title} 
            onFocus={() => {setIsKeyboard(true)}}
            inputMode="text" 
            style={{...input, 
            marginBottom: isKeyboard ? 8 : 32}} 
            onChangeText={(value) => setTitle(value)}/>
            <TextInput 
            placeholder="Locality..." 
            inputMode="navigation" 
            onFocus={() => {
                setIsKeyboard(true);
            }}
            onChangeText={(value) => setLocation(value)}
            style={{...input,
            marginBottom: isKeyboard ? 8 : 32}} 
            value = {location }/>
          <TouchableOpacity activeOpacity={0.5} style={activeBtn ? addBtnActive : addBtn} onPress={sendPost} >
           <Text style={addText}>Add post</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={deleteBtn} onPress={deletePhoto}>
              <Feather name="trash-2" size={24} color="#DADADA" />
              </TouchableOpacity>
          </View>
        </View>
        </TouchableWithoutFeedback>
    );
};

const TabCreate = createBottomTabNavigator();

export default function CreatePostsScreen ({navigation}) {

    return (
      <TabCreate.Navigator initialRouteName="Create"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { display: "none" },
      }}>
       <TabCreate.Screen 
         options={{
            tabBarHideOnKeyboard: true,
            headerLeft: () => (
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Posts')}>
                 <Feather name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
            ),
            headerLeftContainerStyle: {
                paddingLeft: 16,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontWeight: "500",
                fontSize: 17,
                color: "#212121",
                marginBottom: 5,
                marginRight: 15,
            },
            headerStyle: {
                borderTopWidth: 1,
                borderTopColor: "rgba(0, 0, 0, 0.2)",
            }
         }}
       name="Create post" component={CreatePost}/>
      </TabCreate.Navigator>
    );
};