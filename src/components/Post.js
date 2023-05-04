import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { Feather, EvilIcons } from '@expo/vector-icons';

export default function Post ({ image, title, comment, location}) {

    return (
      <View style={styles.postWrapper}> 
      <ImageBackground source={image} style={styles.postImg}></ImageBackground>
       <Text style={styles.postText}>{title}</Text>
       <View style={styles.wrap}>
        <View style={styles.wrapSmall}>
       <Feather name="message-circle" size={18} color="#BDBDBD" />
       <Text style={styles.comment}> { comment }</Text>
       </View>
       <View style={styles.wrapSmall}>
       <EvilIcons name="location" size={24} color="#BDBDBD" />
       <Text style={styles.location}>{location}</Text>
       </View>
       </View>
      </View>
    )
};

const styles = StyleSheet.create({
   postWrapper: {        
    justifyContent: "flex-start",
    marginBottom: 34,
   },
  postImg: {
   width: 343,
   height: 240,
   borderRadius: 8,
   flex:4,
  },
  postText: {
   textAlign: "left",
   marginTop: 8,
   fontWeight: "500",
   fontSize: 16,
  },
  wrap: {
   marginTop: 11,
   flex: 1,
   flexDirection: "row",
   justifyContent: "space-between"
  },
  wrapSmall: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  comment: {
    color: "#BDBDBD",
    fontSize: 16,
  },
  location: {
    fontSize:16,
    fontWeight: "400",
    textDecorationLine: "underline",
  },
});