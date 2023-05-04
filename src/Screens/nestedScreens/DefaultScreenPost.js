import React, {useState, useEffect} from "react";
import { StyleSheet, View, FlatList, Text, Image, TouchableOpacity} from "react-native";
import { Feather, EvilIcons } from '@expo/vector-icons';

import Profile from "../../components/Profile";

const avatar = require('../../../assets/images/user-img.jpg');

export default function DefaultScreenPost({route, navigation}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if(route.params) {
      setPosts(prevState => [...prevState, route.params]);
    }
    },[route.params]);

  return (
     <View style={styles.container}>
        <Profile avatar={avatar} name="Natali Romanenko" email="email@example.com"/>
        <FlatList 
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
            <View style={styles.postWrapper}> 
            <Image source={{uri: item.photo}} style={styles.postImg}></Image>
             <Text style={styles.postText}>{item.title}</Text>
             <View style={styles.wrap}>
    
            <TouchableOpacity style={styles.wrapSmall} activeOpacity={0.5} onPress={() => navigation.navigate("Comments")}>
             <Feather name="message-circle" size={18} color="#BDBDBD" />
             <Text style={styles.comment}> { item.comment }</Text>
             </TouchableOpacity>
            
            <TouchableOpacity style={styles.wrapSmall} activeOpacity={0.5} onPress={() => navigation.navigate("Map", { location: item.location })}>
             <EvilIcons name="location" size={24} color="#BDBDBD" />
             <Text style={styles.location}>{item.location}</Text>
             </TouchableOpacity>
             </View>
            </View>
        )}>
         </FlatList>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        gap: 8,
    },
    postWrapper: {   
     backgroundColor: "#FFFFFF",     
     justifyContent: "center",
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
    //marginTop: 11,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
   },
   wrapSmall: {
     flexDirection: "row",
     justifyContent: "space-between",
     marginRight: 10,
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