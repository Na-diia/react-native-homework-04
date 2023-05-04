import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableOpacity} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from '@expo/vector-icons';

import posts from '../../Data/posts';
import Post from '../../components/Post';

const forest = require('../../../assets/images/forest.jpg');
const bgImage = require('../../../assets/bg-image.jpg');
const avatar = require('../../../assets/images/user-img.jpg');
const crossBtn = require('../../../assets/images/cross-btn.png');


const ProfTabNav = createBottomTabNavigator();

export default function ProfileScreen  ({navigation})  {;
    return( 
        <View style={styles.imgContainer}> 
          <ImageBackground source={bgImage} style={styles.bgImg}>
          <ScrollView>
            <View style={styles.bigWrap}>
                <View style={styles.avaWrapper}>
                <Image source={avatar} style={{width: '100%', height: '100%', borderRadius: 16}}></Image>
                 <TouchableOpacity activeOpacity={0.5} style={styles.deleteImg}>
                   <ImageBackground source={crossBtn} style={{width: '100%', height: '100%'}}></ImageBackground>
                 </TouchableOpacity>
                </View>
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Login')} style={styles.logOut}>
        <Feather name="log-out" size={24} color="#BDBDBD" />
       </TouchableOpacity>
       <Text style={styles.userName}>Natali Romanenko</Text>
       <View style={styles.postWrap}>
       {posts.map((el) => (
        <Post key={el.id} image={forest} title={el.title} 
          comment={0} location={el.location}/>
        ))} 
        </View>
            </View>
        </ScrollView> 
        </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    imgContainer: {
        flex: 1,
        alignItems: "center",
    },
    bgImg: {
      flex: 1,
      resizeMode: 'contain',
      justifyContent: "flex-end",
      width: "100%",
    },
    bigWrap: {
        marginTop: 147,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: 'center',
        width: "100%",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25, 
    },
    avaWrapper: {
        marginTop: -60,
        height: 120,
        width: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
        marginBottom: 32,
        overflow: "visible",
    },
    deleteImg: {
        marginTop: -40,
        left: '90%',
        height: 25,
        width: 25,
        pointerEvents: 'auto',
    },
    logOut: {
        marginLeft: 300,
        marginTop: -70,
    },
    userName: {
      marginTop: 32,
      fontWeight: "500",
      fontSize: 30,
      marginBottom: 32,
    },
    postWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
});