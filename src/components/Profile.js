import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";

export default function ({avatar, name, email}) {

    return (
     <View style={styles.profWrapper}>
     <ImageBackground source={avatar} style={styles.profImg}></ImageBackground>
     <View style={styles.info}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userEmail}>{email}</Text>
     </View>
     </View>
    )
};

const styles = StyleSheet.create({
   profWrapper: {
    justifyContent: "flex-start",
    flexDirection: "row",  
    alignSelf: "flex-start",
    marginTop: 32,
    marginBottom: 32,
    paddingHorizontal: 8,
   },
   profImg: {
    width:60,
    height: 60,
    borderRadius: 16,
   },
   info: {
    justifyContent: "center",
    marginLeft: 8,
   },
   userName: {
    fontWeight: "700",
    fontSize: 13,
   },
   userEmail: {
     color: "rgba(33, 33, 33, 0.8)",
     fontSize: 11,
   },
});